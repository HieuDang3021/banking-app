// src/lib/server/appwrite.js
"use server";
import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || (() => { throw new Error("NEXT_PUBLIC_APPWRITE_ENDPOINT is not defined"); })())
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT || (() => { throw new Error("NEXT_PUBLIC_APPWRITE_PROJECT is not defined"); })());

  const session = (await cookies()).get("appwrite-session");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get user() {
      return new Users(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || (() => { throw new Error("NEXT_PUBLIC_APPWRITE_ENDPOINT is not defined"); })())
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT || (() => { throw new Error("NEXT_PUBLIC_APPWRITE_PROJECT is not defined"); })())
    .setKey(process.env.NEXT_APPWRITE_KEY || (() => { throw new Error("NEXT_APPWRITE_KEY is not defined"); })());

  return {
    get account() {
      return new Account(client);
    },
  };
}
