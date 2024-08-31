import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";
import feedbackImage from "../assets/feedback.webp"; // Exemple d'image
import incidentImage from "../assets/icident.webp"; // Exemple d'image
import pumpStationImage from "../assets/pump-station.webp"; // Exemple d'image

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <Link to="/pump-scheduler" className="block p-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold mb-2">
              Planificateur de Pompes
            </CardTitle>
            <CardDescription>
              Gérez et planifiez les opérations des stations de pompage.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={pumpStationImage}
              alt="Planificateur de Stations de Pompage"
              className="mb-4 w-full h-48 object-cover rounded-md"
            />
          </CardContent>
        </Link>
      </Card>

      <Card>
        <Link to="/incident-detection" className="block p-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold mb-2">
              Détection d'Incidents & Anomalies
            </CardTitle>
            <CardDescription>
              Surveillez les données en temps réel et détectez les anomalies.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={incidentImage}
              alt="Détection d'Incidents"
              className="mb-4 w-full h-48 object-cover rounded-md"
            />
          </CardContent>
        </Link>
      </Card>

      <Card>
        <Link to="/client-feedback" className="block p-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold mb-2">
              Retour & Réclamations des Clients
            </CardTitle>
            <CardDescription>
              Consultez et gérez les retours et réclamations des clients.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={feedbackImage}
              alt="Retour & Réclamations des Clients"
              className="mb-4 w-full h-48 object-cover rounded-md"
            />
          </CardContent>
        </Link>
      </Card>
    </div>
  );
};

export default Dashboard;
