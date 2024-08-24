// src/components/Navbar.tsx

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">Hydro Tech</Link>
        </div>

        <div className="flex space-x-4 items-center justify-center">
          {user ? (
            <>
              <Link
                to="/pump-scheduler"
                className="text-gray-300 hover:text-white"
              >
                Pump Scheduler
              </Link>
              <Link
                to="/incident-detection"
                className="text-gray-300 hover:text-white"
              >
                Incident Detection
              </Link>
              <Link
                to="/client-feedback"
                className="text-gray-300 hover:text-white"
              >
                Client Feedback
              </Link>
              <Button variant={"secondary"} onClick={() => logout()}>
                logout
              </Button>
            </>
          ) : (
            <Button asChild>
              <Link to="/login" className="text-white">
                Login
              </Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};
[];

export default Navbar;
