import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";
import { connection } from "next/server";

export const dynamic = "force-dynamic";

export default async function Navbar() {
  await connection();
  const session = await auth();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="flex gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/client-page" className="hover:underline">
          Client Protected
        </Link>
        <Link href="/server-page" className="hover:underline">
          Server Protected
        </Link>
      </div>
      <div>
        {session?.user ? (
          <div className="flex items-center gap-4">
            <span>Hello, {session.user.name || session.user.email}</span>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit" className="bg-red-600 px-3 py-1 rounded">
                Sign Out
              </button>
            </form>
          </div>
        ) : (
          <div className="flex gap-2">
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit" className="bg-gray-700 px-3 py-1 rounded">
                Sign in with GitHub
              </button>
            </form>
            <form
              action={async () => {
                "use server";
                await signIn("discord");
              }}
            >
              <button type="submit" className="bg-indigo-600 px-3 py-1 rounded">
                Sign in with Discord
              </button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
}
