// src/pages/PumpScheduler.tsx
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import React, { useContext, useState } from "react";
import PumpStationTable from "../components/PumpStationTable";
import ScheduleList from "../components/ScheduleList";
import toast, { Toaster } from "react-hot-toast";
import { format } from "date-fns";
import { PumpStation } from "@/components/types";

const PumpScheduler: React.FC = () => {
  const [selectedStation, setSelectedStation] = useState<PumpStation | null>(
    null
  );
  const { fetchStations } = useContext(AuthContext);

  const handleStationSelect = (station: PumpStation) => {
    setSelectedStation(station);
  };

  const refreshStation = async () => {
    fetchStations();
  };

  const handleDeleteSchedule = async (index: number) => {
    if (selectedStation) {
      const schedule = selectedStation.schedule[index];
      const stationName = selectedStation.name;
      const updatedSchedules = selectedStation.schedule.filter(
        (_, i) => i !== index
      );
      try {
        const response = await axios.patch(
          `http://localhost:5000/pumpStations/${selectedStation.id}`,
          { schedule: updatedSchedules }
        );
        await refreshStation();
        setSelectedStation(response.data);
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="ml-3 flex-1">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Schedule :{" "}
                      <span className="uppercase text-destructive italic underline px-3">
                        {stationName}
                      </span>{" "}
                      was Deleted
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    <strong>Date:</strong>{" "}
                    {format(new Date(schedule.date), "PPP")}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    <strong>Time:</strong> {schedule.startTime} -{" "}
                    {schedule.endTime}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ));
      } catch (error) {
        console.error("Error deleting schedule:", error);
      }
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Pump Station Scheduler</h1>
      <PumpStationTable onSelect={handleStationSelect} />
      {selectedStation && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">
            {selectedStation.name} - {selectedStation.location}
          </h2>
          <ScheduleList
            selectedStation={selectedStation}
            onDelete={handleDeleteSchedule}
          />
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default PumpScheduler;
