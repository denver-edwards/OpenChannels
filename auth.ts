import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/db";

export const { signIn, signOut, auth, handlers } = NextAuth({
  providers: [GitHub],
  pages: {
    signIn: "/login",
  },
  adapter: MongoDBAdapter(clientPromise),
});
