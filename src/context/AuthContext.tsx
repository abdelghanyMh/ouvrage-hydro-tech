// src/context/AuthContext.tsx
import axios from "axios";
import React, { createContext, useState, ReactNode, useEffect } from "react";

interface Schedule {
  date: string;
  startTime: string;
  endTime: string;
}

interface PumpStation {
  id: string;
  name: string;
  location: string;
  schedule: Schedule[];
}

interface AuthContextType {
  user: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  stations: any;
  fetchStations: () => void;
  addStation: (station: PumpStation) => void;
  updateStation: (station: PumpStation) => void;
  deleteStation: (id: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {},
  stations: [],
  fetchStations: () => {},
  addStation: () => {},
  updateStation: () => {},
  deleteStation: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(
    sessionStorage.getItem("user")
  );
  const [stations, setStations] = useState<PumpStation[]>([]);

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
  const addStation = async (station: PumpStation) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/pumpStations",
        station
      );
      setStations([...stations, response.data]);
    } catch (error) {
      console.error("Error adding pump station:", error);
    }
  };

  const updateStation = async (station: PumpStation) => {
    try {
      await axios.put(
        `http://localhost:5000/pumpStations/${station.id}`,
        station
      );
      setStations(stations.map((s) => (s.id === station.id ? station : s)));
    } catch (error) {
      console.error("Error updating pump station:", error);
    }
  };

  const deleteStation = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/pumpStations/${id}`);
      setStations(stations.filter((s) => s.id !== id));
    } catch (error) {
      console.error("Error deleting pump station:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        stations,
        fetchStations,
        addStation,
        updateStation,
        deleteStation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
