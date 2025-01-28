"use server";

import { createAdminClient } from "@/lib/server/appwrite";
import { ID } from "node-appwrite";
import checkAuth from "./checkAuth";

async function createRoom(previousState, formData) {
  const roomName = formData.get("room-name");
  const description = formData.get("description");
  const sqft = formData.get("square-feet");
  const capacity = formData.get("capacity");
  const pricePerHour = formData.get("price-per-hour");
  const address = formData.get("address");
  const location = formData.get("location");
  const availability = formData.get("availability");
  const amenities = formData.get("amenities");

  if (!roomName || !description) {
    return {
      error: "Please fill in all fields",
    };
  }

  // Get databases instance
  const { databases } = await createAdminClient();

  try {
    const { user } = await checkAuth();

    if (!user) {
      return {
        error: "You must be logged in to create a room",
      };
    }

    const data = {
      user_id: user.id,
      name: roomName,
      description,
      sqft,
      capacity,
      price_per_hour: pricePerHour,
      address,
      location,
      availability,
      amenities,
    };

    await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
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

export default createRoom;
