"use server";

import { createAdminClient } from "@/lib/server/appwrite";
import checkAuth from "./checkAuth";
import { Query } from "node-appwrite";

const getMyBookings = async () => {
  const { user } = await checkAuth();

  if (!user) {
    return {
      error: "You must be logged in to view bookings",
    };
  }

  try {
    const { databases } = await createAdminClient();
    const { documents: bookings } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      [Query.equal("user_id", user.id)]
    );

    return bookings;
  } catch (error) {
    console.error("Error: ", error);

    return {
      error: "Internal Server Error",
    };
  }
};

export default getMyBookings;
