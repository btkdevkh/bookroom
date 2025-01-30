"use server";

import { createAdminClient } from "@/lib/server/appwrite";
import checkAuth from "./checkAuth";

const cancelBooking = async (bookingId) => {
  const { user } = await checkAuth();

  if (!user) {
    return {
      error: "You must be logged in to cancel a booking",
    };
  }

  try {
    const { databases } = await createAdminClient();

    // Get booking
    const booking = await databases.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      bookingId
    );

    if (booking.user_id !== user.id) {
      return {
        error: "You are not authorized to cancel this booking",
      };
    }

    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      bookingId
    );

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error: ", error);

    return {
      error: "Internal Server Error",
    };
  }
};

export default cancelBooking;
