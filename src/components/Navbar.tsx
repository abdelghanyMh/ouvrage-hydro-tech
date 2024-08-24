// src/components/Navbar.tsx

import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthContext";
import { Droplet } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold flex gap-1 items-center flex-nowrap">
          <Droplet />
          <Link to="/">Hydro Tech</Link>
        </div>

        <div className="flex space-x-4 items-center justify-center">
          {user ? (
            <>
              <Link
                to="/pump-stations "
                className="text-gray-300 hover:text-white"
              >
                Pump Stations
              </Link>
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
            <>
              <Link
                to="/client-feedback"
                className="text-gray-300 hover:text-white"
              >
                Client Feedback
              </Link>
              <Button asChild>
                <Link to="/login" className="text-white">
                  Login
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
[];

export default Navbar;
