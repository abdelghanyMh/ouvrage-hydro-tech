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
  const { stations, fetchStations } = useContext(AuthContext);

  useEffect(() => {
    fetchStations();
  }, []);

  const refreshStation = async () => {
    fetchStations();
  };

  return (
    <div className="p-8">
      <Table>
        <TableCaption>Liste des Stations de Pompe.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nom</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Horaire Actuel</TableHead>
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
                  : "Pas d'Horaire"}
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="mr-3 bg-green-300 hover:bg-green-100"
                    >
                      Créer
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Créer un Horaire</DialogTitle>
                      <DialogDescription>
                        Créez un nouvel horaire pour la station de pompe.
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
