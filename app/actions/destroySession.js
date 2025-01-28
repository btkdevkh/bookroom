"use server";

import { cookies } from "next/headers";
import { createSessionClient } from "@/lib/server/appwrite.js";

const destroySession = async () => {
  try {
    const { account } = await createSessionClient();

    // Delete session
    await account.deleteSession("current");

    // Delete cookie
    await cookies().delete("bookroom-session");

    return {
      success: true,
    };
  } catch (error) {
    console.log("Error :", error);

    return {
      error: "Internal Server Error",
    };
  }
};

export default destroySession;
