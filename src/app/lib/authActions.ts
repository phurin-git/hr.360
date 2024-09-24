'use server';
import { signIn, signOut } from '@/app/auth';
import { AuthError } from 'next-auth';

export const login = async (email: string, password: string): Promise<string | null> => {
  try {
    await signIn('credentials', { email, password, redirectTo: '/dashboard' });
    return null;
  } catch (error) {
    if (error instanceof AuthError) {
      return 'Invalid email or password.';
    }
    throw error;
  }
};

export const logout = async () => {
  await signOut({ redirectTo: '/signin' });
};