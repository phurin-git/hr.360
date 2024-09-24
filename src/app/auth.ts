import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { ZodError } from "zod"
import { signInSchema } from "./lib/zod"

const userDB = [
  { id: "1", name: "Super User", email: "superuser@account.com", password: "superuser" },
]

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
          const user = userDB.find((u) => u.email === email && u.password === password);

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
})