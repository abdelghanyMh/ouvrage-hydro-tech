// src/pages/Home.tsx
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom"; // For navigation
import pumpStationImage from "../assets/pump-station.webp"; // Example image
import waterManagementImage from "../assets/water-management.webp"; // Example image

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <header className="w-full text-center py-6 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold"> Hydro Tech</h1>
        <p className="text-lg mt-2">
          Efficient Water Pump Stations Management Solutions
        </p>
      </header>

      <main className="flex flex-col items-center justify-center w-full max-w-4xl mt-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-4 bg-white shadow-md rounded-md">
              <img
                src={pumpStationImage}
                alt="Pump Station Scheduler"
                className="mb-4 w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">
                Pump Station Scheduler
              </h3>
              <p className="text-gray-700">
                Efficiently manage and schedule your pump stations with ease.
              </p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-md">
              <img
                src={waterManagementImage}
                alt="Water Management System"
                className="mb-4 w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">
                Water Management System
              </h3>
              <p className="text-gray-700">
                Monitor, analyze, and optimize water usage across your
                infrastructure.
              </p>
            </div>
          </div>
        </section>

        <Link to="/client-feedback">
          <Button variant="default" className="mt-6">
            contact Us
          </Button>
        </Link>
      </main>

      <footer className="w-full text-center py-6 bg-gray-800 text-white mt-12">
        <p>&copy; 2024 Ouvrage Hydro Tech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
