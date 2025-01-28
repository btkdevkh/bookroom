"use server";

import { createSessionClient } from "@/lib/server/appwrite.js";

const checkAuth = async () => {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();

    return {
      isAuthenticated: true,
      user: {
        id: user.$id,
        name: user.name,
        email: user.email,
      },
    };
  } catch (error) {
    console.log("Error :", error.message);

    return {
      isAuthenticated: false,
      user: null,
    };
  }
};

export default checkAuth;
