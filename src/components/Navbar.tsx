import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-[#001740] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold flex  flex-row gap-1 items-end flex-nowrap justify-end">
          <img src="/logo_small.png" alt="logo" width="50" />
          <Link to="/">
            {/* image tag display inline with 50px logo_small.pnh */}
            Ouvrage Hydro Tech
          </Link>
        </div>

        <div className="flex space-x-2 items-center justify-center text-sm">
          {user ? (
            <>
              <Link
                to="/pump-stations"
                className="text-gray-300 hover:text-white"
              >
                Stations de Pompage
              </Link>
              <Link
                to="/pump-scheduler"
                className="text-gray-300 hover:text-white"
              >
                Planificateur de Pompes
              </Link>
              <Link
                to="/incident-detection"
                className="text-gray-300 hover:text-white"
              >
                Détection d'Incidents
              </Link>
              <Link
                to="/client-feedback"
                className="text-gray-300 hover:text-white"
              >
                Retour des Clients
              </Link>
              <Button variant={"secondary"} onClick={() => logout()}>
                Déconnexion
              </Button>
            </>
          ) : (
            <>
              <Link
                to="/client-feedback"
                className="text-gray-300 hover:text-white"
              >
                Retour des Clients
              </Link>
              <Button asChild>
                <Link to="/login" className="text-white">
                  Connexion
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
