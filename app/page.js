"use client";
import { useState } from "react"; // No need for useEffect here if not used
import Link from "next/link";
import { useUserAuth } from "./auth-context"; // Assuming this is the correct path

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // TODO: Implement handleSignIn and handleSignOut functions using gitHubSignIn and firebaseSignOut from useUserAuth
  const handleSignIn = async () => {
    await gitHubSignIn();
  };
  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-10 bg-blue-100">
      {user ? (
        <>
          <p className="text-2xl font-bold mb-4 text-red-800">Welcome {user.displayName}!</p>
          {/* TODO: Render a button that links to the weather page. Use the Next.js Link component. */}
          <button className="mt-4 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold  transition duration-300 ease-in-out">
            <Link href="/weather">Weather</Link>
          </button>
          {/* TODO: Render a Sign Out button that calls handleSignOut when clicked */}
          <button
            onClick={handleSignOut}
            className="mt-4 px-4 py-2 rounded-md bg-red-500 hover:bg-red-700 text-white font-bold  transition duration-300 ease-in-out"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <p className="text-2xl font-bold mb-4 text-red-800">Please sign in to access the weather information.</p>
          {/* TODO: Render a Sign In button that calls handleSignIn when clicked */}
          <button
            onClick={handleSignIn}
            className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In with GitHub
          </button>
        </>
      )}
    </div>
  );
}
