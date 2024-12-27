import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../components/auth/client.js";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);

  if (token) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let data = JSON.parse(localStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: user, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user data:", error);
      } else {
        setUserData(user);
      }
    };

    fetchUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, userData }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("auth context error");
  }
  return context;
}
