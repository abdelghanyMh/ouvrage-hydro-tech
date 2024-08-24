// src/pages/PumpScheduler.tsx
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import React, { useContext, useState } from "react";
import PumpStationTable from "../components/PumpStationTable";
import ScheduleList from "../components/ScheduleList";

interface Schedule {
  date: string;
  startTime: string;
  endTime: string;
}

interface PumpStation {
  id: number;
  name: string;
  location: string;
  schedule: Schedule[];
}

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
            schedules={selectedStation.schedule}
            onDelete={handleDeleteSchedule}
          />
        </div>
      )}
    </div>
  );
};

export default PumpScheduler;
