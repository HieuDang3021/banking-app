"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    //ACTION
  } catch (error) {
    console.error("Error while making sign in request: ", error);
  }
};

export const signUp = async (userData: SignUpParams) => {
  try {
    //ACTION

  } catch (error) {
    console.error("Error while making sign up request: ", error);
  }
};

export async function signUpWithEmail(userData: SignUpParams) {
  const { email, password, firstName, lastName } = userData;
  try {
    const { account } = await createAdminClient();
  
    const newUser = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);
    const session = await account.createEmailPasswordSession(email, password);
  
    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUser);
  } catch (err) {
    console.error("Error while making sign up request: ", err);
  }

}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return console.error("Error when create client session:", error);
  }
}
