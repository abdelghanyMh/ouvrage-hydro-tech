// src/context/AuthContext.tsx
import axios from "axios";
import React, { createContext, useState, ReactNode, useEffect } from "react";

interface AuthContextType {
  user: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  stations: any;
  fetchStations: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {},
  stations: [],
  fetchStations: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(
    sessionStorage.getItem("user")
  );
  const [stations, setStations] = useState([]);

  useEffect(() => {
    fetchStations();
    const savedUser = sessionStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const login = (username: string, password: string) => {
    if (username === "admin" && password === "password") {
      setUser(username);
      sessionStorage.setItem("user", username);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };
  const fetchStations = async () => {
    try {
      const response = await axios.get("http://localhost:5000/pumpStations");
      setStations(response.data);
    } catch (error) {
      console.error("Error fetching pump stations:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, stations, fetchStations }}
    >
      {children}
    </AuthContext.Provider>
  );
};
