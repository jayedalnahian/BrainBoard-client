import { useEffect, useState, type ReactNode } from "react";
import { AuthContext, type AuthUser } from "../context/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type UserCredential,
} from "firebase/auth";
import auth from "../auth/firebase.config";

interface AuthProviderProps {
  children: ReactNode;
}
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const googleProvider = new GoogleAuthProvider();

  // registration or signUp functionality over here
  const registerUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login functionality over here
  const loginUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google sign in functionality over here
  const googleLogin = (): Promise<UserCredential> => {
    return signInWithPopup(auth, googleProvider);
  };

  // logOut functionality over here
  const logOut = (): Promise<void> => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        currentUser.getIdToken().then((token) => {
          setUser({ ...currentUser, accessToken: token });
          setLoading(false);
        });
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const userInformation = {
    registerUser,
    loading,
    loginUser,
    googleLogin,
    logOut,
    user,
    setUser,
    setLoading,
  };

  return (
    <AuthContext.Provider value={userInformation}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
