import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";

export const dynamic = "force-dynamic";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="flex gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/client" className="hover:underline">
          Client Page
        </Link>
        <Link href="/server" className="hover:underline">
          Server Page
        </Link>
      </div>
      <div>
        {session?.user ? (
          <div className="flex items-center gap-4">
            <span>In use: {session.user.name || session.user.email}</span>
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
                GitHub
              </button>
            </form>
            <form
              action={async () => {
                "use server";
                await signIn("discord");
              }}
            >
              <button type="submit" className="bg-indigo-600 px-3 py-1 rounded">
                Discord
              </button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
}
