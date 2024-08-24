// src/components/ScheduleForm.tsx
import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { PumpStation } from "./types";



interface Props {
  station: PumpStation;
  onUpdate: () => void;
}

const ScheduleForm: React.FC<Props> = ({ station, onUpdate }) => {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newSchedule = { date, startTime, endTime };
    try {
      await axios.patch(`http://localhost:5000/pumpStations/${station.id}`, {
        schedule: [...station.schedule, newSchedule],
      });
      
      onUpdate();
      console.log("updatedSchedules");
      setDate("");
      setStartTime("");
      setEndTime("");
    } catch (error) {
      console.error("Error updating schedule:", error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="startTime">Start Time</Label>
        <Input
          id="startTime"
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="endTime">End Time</Label>
        <Input
          id="endTime"
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
      </div>
      <Button type="submit" variant="default">Save Schedule</Button>

    </form>
  );
};

export default ScheduleForm;
