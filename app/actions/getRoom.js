"use server";

import { createAdminClient } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";

const getRoom = async (id) => {
  try {
    const { databases } = await createAdminClient();
    const room = await databases.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      id
    );

    return room;
  } catch (error) {
    console.error("Error: ", error);
    redirect("/error");
  }
};

export default getRoom;
