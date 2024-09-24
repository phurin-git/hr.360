import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { ZodError } from "zod"
import { signInSchema } from "./lib/zod";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
          const user = await fetch(`${API_URL}/api/auth/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: password }),
          }).then((res) => res.json());

          if (user) {
            return user;
          } else {
            throw process.env.NODE_ENV === "development" ? new Error("Invalid email or password.") : null;
          }
        } catch (error) {
          if (error instanceof ZodError) {
            throw process.env.NODE_ENV === "development" ? new Error("Invalid email or password.") : null;
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
})