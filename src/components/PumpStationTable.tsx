// src/components/PumpStationTable.tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext, useEffect } from "react";
import ScheduleForm from "./ScheduleForm";
import { Button } from "./ui/button";
import { PumpStation } from "./types";

interface Props {
  onSelect: (station: PumpStation) => void;
}

const PumpStationTable: React.FC<Props> = ({ onSelect }) => {
  // const [stations, setStations] = useState<PumpStation[]>([]);
  const { stations, fetchStations } = useContext(AuthContext);

  // const [selectedStation, setSelectedStation] = useState<PumpStation | null>(
  //   null
  // );

  useEffect(() => {
    fetchStations();
  }, []);

  // const fetchStations = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/pumpStations");
  //     setStations(response.data);
  //   } catch (error) {
  //     console.error("Error fetching pump stations:", error);
  //   }
  // };

  const refreshStation = async () => {
    fetchStations();
  };

  return (
    <div className="p-8">
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
          {stations.map((station: any) => (
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
                    <Button
                      variant="outline"
                      className="mr-3 bg-green-300 hover:bg-green-100"
                    >
                      Create
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Create Schedule</DialogTitle>
                      <DialogDescription>
                        Create a new Schedule for pump station.
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
