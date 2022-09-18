import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    {
      id: "wakatime",
      name: "Wakatime",
      type: "oauth",
      version: "2.0",
      authorization: {
        url: "https://wakatime.com/oauth/authorize",
        params: { response_type: "code", scope: "email" },
      },
      token: "https://wakatime.com/oauth/token",
      userinfo: "https://wakatime.com/api/v1/users/current",
      clientId: env.WAKATIME_CLIENT_ID,
      clientSecret: env.WAKATIME_CLIENT_SECRET,
      profile(profile) {
        console.log(profile);
        return {
          id: profile.data.id,
          name: profile.data.username,
          email: profile.data.email,
        };
      },
    },
  ],
};

export default NextAuth(authOptions);
