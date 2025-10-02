"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { getSession } from "@/actions/auth";
import { toast } from "sonner";

// Define the expected session type (adjust based on your actual session structure)
interface Session {
  username?: string;
  // Add other session properties as needed, e.g., id, email, etc.
}

const ChatHeader = () => {
  const [userSession, setUserSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        setIsLoading(true);
        const session = await getSession(); // Await the async getSession
        console.log(session)
        setUserSession(session); // Handle null/undefined cases
      } catch (err) {
        // console.error("Failed to fetch session:", err);
        toast.error("Failed to load user session. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSession();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <header className="h-[3.8rem] flex justify-between items-center w-full px-4 md:px-6">
      <span
        role="heading"
        aria-level={1}
        className="text-lg font-semibold"
      >
        Explain Quantum Computing
      </span>
      <div className="flex items-center gap-2">
        {isLoading ? (
          <span>Loading...</span>
        ) : userSession ? (
          <span aria-label="Logged-in user">Log out</span>
        ) : (
          <Link href="/login" aria-label="Sign up or log in">
            <Button>Signup / Login</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default ChatHeader;