import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PumpStation } from "./types";

interface Props {
  station: PumpStation;
  scheduleIndex: number;
  onUpdate: () => void;
}

const EditScheduleForm: React.FC<Props> = ({
  station,
  scheduleIndex,
  onUpdate,
}) => {
  const [date, setDate] = useState(station.schedule[scheduleIndex].date);
  const [startTime, setStartTime] = useState(
    station.schedule[scheduleIndex].startTime
  );
  const [endTime, setEndTime] = useState(
    station.schedule[scheduleIndex].endTime
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newSchedule = { date, startTime, endTime };
    const newScheduleArray = station.schedule.map((schedule, index) => {
      if (index === scheduleIndex) {
        return newSchedule;
      }
      return schedule;
    });

    try {
      await axios.patch(`http://localhost:5000/pumpStations/${station.id}`, {
        schedule: newScheduleArray,
      });

      onUpdate();
      console.log("Horaires mis à jour");
      setDate("");
      setStartTime("");
      setEndTime("");
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'horaire :", error);
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
        <Label htmlFor="startTime">Heure de début</Label>
        <Input
          id="startTime"
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="endTime">Heure de fin</Label>
        <Input
          id="endTime"
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
      </div>
      <Button type="submit" variant="default">
        Enregistrer l'horaire
      </Button>
    </form>
  );
};

export default EditScheduleForm;
