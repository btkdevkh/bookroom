"use server";

import { cookies } from "next/headers";
import { createAdminClient } from "@/lib/server/appwrite.js";

const createSession = async (previousState, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return {
      error: "Please fill in all fields",
    };
  }

  const { account } = await createAdminClient();

  try {
    const session = await account.createEmailPasswordSession(email, password);

    // Create cookie
    cookies().set("bookroom-session", session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expire: new Date(session.expire),
      path: "/",
    });

    return {
      success: true,
      user: {
        id: session.userId,
        email: session.providerUid,
      },
    };
  } catch (error) {
    console.log("Error :", error);

    return {
      error: "Invalid Credentials",
    };
  }
};

export default createSession;
