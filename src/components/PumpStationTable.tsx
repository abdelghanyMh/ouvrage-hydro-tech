// src/components/PumpStationTable.tsx
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import ScheduleForm from "./ScheduleForm";

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

interface Props {
  onSelect: (station: PumpStation) => void;
}

const PumpStationTable: React.FC<Props> = ({ onSelect }) => {
  const [stations, setStations] = useState<PumpStation[]>([]);
  const [selectedStation, setSelectedStation] = useState<PumpStation | null>(
    null
  );

  useEffect(() => {
    fetchStations();
  }, []);

  const fetchStations = async () => {
    try {
      const response = await axios.get("http://localhost:5000/pumpStations");
      setStations(response.data);
    } catch (error) {
      console.error("Error fetching pump stations:", error);
    }
  };

  const refreshStation = async () => {
    fetchStations();
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableCaption>A list of Pump Station Table.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Current Schedule</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stations.map((station) => (
            <TableRow key={station.id} onClick={() => onSelect(station)}>
              <TableCell className="font-medium">{station.id}</TableCell>
              <TableCell>{station.name}</TableCell>
              <TableCell>{station.location}</TableCell>
              <TableCell>
                {station.schedule.length > 0
                  ? `${station.schedule[0].startTime} - ${station.schedule[0].endTime}`
                  : "No Schedule"}
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Edit</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Schedule</DialogTitle>
                      <DialogDescription>
                        Make changes to Scheduled Operations.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <ScheduleForm
                        station={station}
                        onUpdate={refreshStation}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PumpStationTable;
