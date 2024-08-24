// src/pages/Dashboard.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";
import feedbackImage from "../assets/feedback.webp"; // Example image
import incidentImage from "../assets/icident.webp"; // Example image
import pumpStationImage from "../assets/pump-station.webp"; // Example image

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <Link to="/pump-scheduler" className="block p-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold mb-2">
              Pump Scheduler
            </CardTitle>
            <CardDescription>
              Manage and schedule pump station operations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={pumpStationImage}
              alt="Pump Station Scheduler"
              className="mb-4 w-full h-48 object-cover rounded-md"
            />
          </CardContent>
        </Link>
      </Card>

      <Card>
        <Link to="/incident-detection" className="block p-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold mb-2">
              Incident & Anomaly Detection
            </CardTitle>
            <CardDescription>
              Monitor real-time data and detect anomalies.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={incidentImage}
              alt="Pump Station Scheduler"
              className="mb-4 w-full h-48 object-cover rounded-md"
            />
          </CardContent>
        </Link>
      </Card>
      <Card>
        <Link to="/client-feedback" className="block p-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold mb-2">
              Client Feedback & Claims
            </CardTitle>
            <CardDescription>
              View and manage client feedback and claims.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={feedbackImage}
              alt="Pump Station Scheduler"
              className="mb-4 w-full h-48 object-cover rounded-md"
            />
          </CardContent>
        </Link>
      </Card>
    </div>
  );
};

export default Dashboard;
