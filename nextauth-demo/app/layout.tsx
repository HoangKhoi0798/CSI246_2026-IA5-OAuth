import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { Suspense } from "react";
import { Providers } from "./components/providers";

export const metadata: Metadata = {
  title: "NextAuth Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Suspense
            fallback={
              <div className="p-4 bg-gray-900 text-white">
                Loading navigation bar...
              </div>
            }
          >
            <Navbar />
          </Suspense>
          <main className="p-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
