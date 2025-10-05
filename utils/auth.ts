// lib/auth.ts
"use server"; // Server-only module

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSessionClient } from "@/appwrite/config";
import { OAuthProvider } from "node-appwrite"; // Import Appwrite's OAuthProvider type

// Helper function to get the current user
export async function getUser() {
  const sessionCookie = cookies().get("session");

  if (!sessionCookie?.value) {
    return null;
  }

  try {
    const { account } = await createSessionClient(sessionCookie.value);
    return await account.get();
  } catch (error) {
    console.error("Failed to get user:", error);
    return null;
  }
}

// Initiate OAuth2 session
export async function createSession(provider: OAuthProvider) {
  try {
    const { account } = await createSessionClient(); // No session token needed for OAuth2 initiation
    const successUrl = `${process.env.NEXT_PUBLIC_URL}/`;
    const failureUrl = `${process.env.NEXT_PUBLIC_URL}/login`;

    // Initiate OAuth2 flow (this redirects the user to the provider's login page)
    await account.createOAuth2Token(provider, successUrl, failureUrl);

    // Note: The redirect happens automatically, so no code executes after this
  } catch (error) {
    console.error("Failed to initiate OAuth2 session:", error);
    throw new Error("Failed to start authentication");
  }
}

// Handle OAuth2 callback
export async function handleOAuthCallback() {
  try {
    const { account } = await createSessionClient();
    // Get the current session after OAuth2 callback
    const session = await account.getSession("current");

    // Set session cookie
    cookies().set("session", session.$id, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      expires: new Date(session.expire),
      path: "/",
    });

    redirect("/"); // Redirect to homepage after successful authentication
  } catch (error) {
    console.error("Failed to handle OAuth callback:", error);
    redirect("/login?error=auth_failed");
  }
}

// Delete the current session
export async function deleteSession() {
  const sessionCookie = cookies().get("session");

  if (sessionCookie?.value) {
    try {
      const { account } = await createSessionClient(sessionCookie.value);
      await account.deleteSession("current");
    } catch (error) {
      console.error("Failed to delete session:", error);
    }
  }

  cookies().delete("session");
  redirect("/login");
}