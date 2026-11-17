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
          You are required to log in to view the content of this page. <br />
          Select your preferred sign in method from the upper right of the
          navigation bar.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Protected Client Page</h1>
      <p className="mt-2">
        This is the protected client page. User currently using:{" "}
        <strong>{session?.user?.email}</strong>!
      </p>
    </div>
  );
}
