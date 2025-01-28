"use server";

import { createAdminClient } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";
import { Query } from "node-appwrite";
import checkAuth from "./checkAuth";

const deleteRoom = async (id) => {
  const { user } = await checkAuth();

  if (!user) {
    redirect("/login");
  }

  try {
    const { databases } = await createAdminClient();
    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      [Query.equal("user_id", user.id)]
    );

    // Find room
    const roomToDelete = rooms.find((room) => room.$id === id);

    if (roomToDelete) {
      // Delete room
      await databases.deleteDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
        roomToDelete.$id
      );

      return {
        success: true,
      };
    } else {
      return {
        error: "Room not found",
      };
    }
  } catch (error) {
    console.error("Error: ", error);
    return {
      error: "Internal Server Error",
    };
  }
};

export default deleteRoom;
