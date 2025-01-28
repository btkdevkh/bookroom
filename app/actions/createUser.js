"use server";

import { createAdminClient } from "@/lib/server/appwrite";
import { ID } from "node-appwrite";

async function createUser(previousState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");

  if (!email || !password) {
    return {
      error: "Please fill in all fields",
    };
  }

  if (password.length < 8) {
    return {
      error: "Password must be at least 8 characters long",
    };
  }

  if (confirmPassword !== password) {
    return {
      error: "Password do not match",
    };
  }

  const { account } = await createAdminClient();

  try {
    await account.create(ID.unique(), email, password, name);

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

export default createUser;
