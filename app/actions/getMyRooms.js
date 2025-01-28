"use server";

import { createAdminClient } from "@/lib/server/appwrite";
import checkAuth from "./checkAuth";
import { redirect } from "next/dist/server/api-utils";
import { Query } from "node-appwrite";

const getMyRooms = async () => {
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

    return rooms;
  } catch (error) {
    console.error("Error: ", error);
    redirect("/error");
  }
};

export default getMyRooms;
