import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Discord from "next-auth/providers/discord";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    Discord({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
      issuer: "https://discord.com",
      authorization: { params: { scope: "identify email" } },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  trustHost: true,
});
