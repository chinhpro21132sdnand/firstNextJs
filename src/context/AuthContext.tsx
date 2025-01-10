import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/config/firebase";

// Xác định kiểu dữ liệu cho context
interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
}

// Tạo context với giá trị mặc định ban đầu là `undefined`
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook tùy chỉnh để sử dụng context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Xác định kiểu cho props của AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Component AuthProvider
export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
