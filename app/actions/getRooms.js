"use server";

import { createAdminClient } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";

const getRooms = async () => {
  try {
    const { databases } = await createAdminClient();
    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS
    );

    return rooms;
  } catch (error) {
    console.error("Error: ", error);
    redirect("/error");
  }
};

export default getRooms;
