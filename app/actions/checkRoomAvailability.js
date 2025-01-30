"use server";

import { createAdminClient, createSessionClient } from "@/lib/server/appwrite";
import { Query } from "node-appwrite";
import { DateTime } from "luxon";

const checkRoomAvailability = async (roomId, checkIn, checkOut) => {
  const { account } = await createSessionClient();
  const user = await account.get();

  if (!user) {
    return {
      error: "You must be logged in to book a room",
    };
  }

  try {
    const checkInDateTime = DateTime.fromISO(checkIn, { zone: "utc" }).toUTC();
    const checkOutDateTime = DateTime.fromISO(checkOut, {
      zone: "utc",
    }).toUTC();

    const { databases } = await createAdminClient();

    const { documents: bookings } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      [Query.equal("room_id", roomId)]
    );

    for (const booking of bookings) {
      const bookingCheckInDateTime = DateTime.fromISO(booking.check_in, {
        zone: "utc",
      }).toUTC();
      const bookingCheckOutDateTime = DateTime.fromISO(booking.check_out, {
        zone: "utc",
      }).toUTC();

      if (
        checkInDateTime < bookingCheckOutDateTime &&
        checkOutDateTime > bookingCheckInDateTime
      ) {
        return false;
      }
    }

    return true;
  } catch (error) {
    console.error("Error: ", error);

    return {
      error: "Internal Server Error",
    };
  }
};

export default checkRoomAvailability;
