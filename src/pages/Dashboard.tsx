// src/pages/Dashboard.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <Link to="/pump-scheduler" className="block p-6">
          <CardHeader>
            <CardTitle>Pump Scheduler</CardTitle>
            <CardDescription>
              Manage and schedule pump station operations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Manage and schedule pump station operations.</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Link>
      </Card>

      <Card>
        <Link to="/incident-detection" className="block p-6">
          <h2 className="text-xl font-semibold mb-2">
            Incident & Anomaly Detection
          </h2>
          <p>Monitor real-time data and detect anomalies.</p>
        </Link>
      </Card>
      <Card>
        <Link to="/client-feedback" className="block p-6">
          <h2 className="text-xl font-semibold mb-2">
            Client Feedback & Claims
          </h2>
          <p>View and manage client feedback and claims.</p>
        </Link>
      </Card>
    </div>
  );
};

export default Dashboard;
