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

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
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
        <Route
          path="/client-feedback"
          element={
            <ProtectedRoute>
              <ClientFeedback />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
