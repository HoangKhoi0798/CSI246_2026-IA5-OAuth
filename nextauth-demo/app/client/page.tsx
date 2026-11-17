"use client";
import { useSession } from "next-auth/react";

export default function ClientPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      window.location.href = "/"; // Redirect if not logged in
    },
  });

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Protected Client Page</h1>
      <p>Welcome, {session?.user?.email}!</p>
    </div>
  );
}
