import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { ZodError } from "zod"
import { signInSchema } from "./lib/zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", placeholder: 'Enter your email' },
        password: { label: "Password", type: "password", placeholder: 'Enter your password' },
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await signInSchema.parseAsync(credentials);
          const user = await fetch(`${process.env.HOST}/api/auth/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: password }),
          }).then((res) => res.json());

          if (user) {
            return user;
          } else {
            throw new Error("Invalid email or password.");
          }
        } catch (error) {
          if (error instanceof ZodError) {
            throw new Error("Invalid email or password.");
          }
          throw error;
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
  trustHost: true,
})