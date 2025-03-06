import { createContext, useContext, useState } from "react";
import { AuthContextType, UserType } from "@/types";
import { auth, firestore } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType>(null);

  const login = async (email: string, passwword: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, passwword);
      return { success: true };
    } catch (error: any) {
      let msg = error.message;
      return { success: false, msg };
    }
  };

  const signup = async (email: string, passwword: string, name: string) => {
    try {
      let response = await createUserWithEmailAndPassword(
        auth,
        email,
        passwword
      );
      await setDoc(doc(firestore, "users", response?.user?.uid), {
        name,
        email,
        uid: response?.user?.uid,
      });
      return { success: true };
    } catch (error: any) {
      let msg = error.message;
      return { success: false, msg };
    }
  };

  const updateUserData = async (uid: string) => {
    try {
      const docRef = doc(firestore, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const userData: UserType = {
          uid: data?.uid,
          email: data.email || null,
          name: data.name || null,
          image: data.image || null,
        };
        setUser({ ...userData });
      }
    } catch (error: any) {
      let msg = error.message;
      console.log("error:", error);
    }
  };

  const contextValue: AuthContextType = {
    user,
    setUser,
    login,
    signup,
    updateUserData,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be wrapped in an AuthContext");
  }
  return context;
};
