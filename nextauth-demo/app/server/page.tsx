import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ServerPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Protected Server Page</h1>
      <p>
        This page was rendered securely on the server for:{" "}
        <strong>{session.user?.name}</strong>
      </p>
    </div>
  );
}
