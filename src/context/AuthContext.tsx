import { createContext } from "react";
import type { User, UserCredential } from "firebase/auth";

export type AuthUser = User & { accessToken: string };


interface AuthContextType {
  user: (User & { accessToken: string }) | null;
  loading: boolean;
  registerUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  googleLogin: () => Promise<UserCredential>;
  logOut: () => Promise<void>;
  setUser: (user: User & { accessToken: string } | null) => void;
  setLoading: (loading: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

