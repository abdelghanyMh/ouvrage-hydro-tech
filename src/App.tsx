// src/App.tsx
import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PumpScheduler from "./pages/PumpScheduler";
import IncidentDetection from "./pages/IncidentDetection";
import ClientFeedback from "./pages/ClientFeedback";
import Login from "./pages/Login";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import PumpStationsPage from "./pages/PumpStationsPage";
import Home from "./pages/home";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/home" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pump-stations"
          element={
            <ProtectedRoute>
              <PumpStationsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pump-scheduler"
          element={
            <ProtectedRoute>
              <PumpScheduler />
            </ProtectedRoute>
          }
        />
        <Route
          path="/incident-detection"
          element={
            <ProtectedRoute>
              <IncidentDetection />
            </ProtectedRoute>
          }
        />
        <Route path="/client-feedback" element={<ClientFeedback />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
