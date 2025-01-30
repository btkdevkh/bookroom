"use server";

import { createAdminClient, createSessionClient } from "@/lib/server/appwrite";
import { ID } from "node-appwrite";
import checkRoomAvailability from "./checkRoomAvailability";

async function bookRoom(previousState, formData) {
  const checkInDate = formData.get("check-in");
  const checkInTime = formData.get("check-in-time");
  const checkOutDate = formData.get("check-out");
  const checkOutTime = formData.get("check-out-time");
  const roomId = formData.get("room-id");

  const checkInDateTime = `${checkInDate}T${checkInTime}`;
  const checkOutDateTime = `${checkOutDate}T${checkOutTime}`;

  // Get databases instance
  const { databases } = await createAdminClient();

  try {
    const { account } = await createSessionClient();
    const user = await account.get();

    if (!user) {
      return {
        error: "You must be logged in to book a room",
      };
    }

    const roomAvailability = await checkRoomAvailability(
      roomId,
      checkInDateTime,
      checkOutDateTime
    );

    if (!roomAvailability) {
      return {
        error: "This room is already booked for the selected time",
      };
    }

    const data = {
      check_in: checkInDateTime,
      check_out: checkOutDateTime,
      user_id: user.$id,
      room_id: roomId,
    };

    await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      ID.unique(),
      data
    );

    return {
      success: true,
    };
  } catch (error) {
    console.log("Error :", error);

    return {
      error: "Internal Server Error",
    };
  }
}

export default bookRoom;
