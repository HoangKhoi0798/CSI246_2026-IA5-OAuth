"use client";
import { useSession } from "next-auth/react";

export default function ClientPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p className="p-8">Loading...</p>;

  if (!session) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Protected Client Page</h1>
        <p className="text-red-500 mt-2">
          You must be logged in to view this page. Please sign in using the
          Navbar above.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Protected Client Page</h1>
      <p className="mt-2">
        Welcome to the client side, <strong>{session?.user?.email}</strong>!
      </p>
    </div>
  );
}
