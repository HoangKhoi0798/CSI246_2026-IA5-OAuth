import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const instant = false;

async function ServerContent() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Protected Server Page</h1>
      <p className="mt-2">
        This page was rendered securely on the server for:{" "}
        <strong>{session.user?.name || session.user?.email}</strong>
      </p>
    </div>
  );
}

export default function ServerPage() {
  return (
    <div className="p-8">
      <Suspense fallback={<p>Loading protected content...</p>}>
        <ServerContent />
      </Suspense>
    </div>
  );
}
