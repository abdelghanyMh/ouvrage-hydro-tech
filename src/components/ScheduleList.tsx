import React from "react";
import { format } from "date-fns";
import { PumpStation } from "./types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import EditScheduleForm from "./EditScheduleForm ";

interface Props {
  selectedStation: PumpStation;
  onDelete: (index: number) => void;
}

const ScheduleList: React.FC<Props> = ({ selectedStation, onDelete }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Opérations Planifiées</h2>
      {selectedStation.schedule.length === 0 ? (
        <p>Aucun horaire disponible.</p>
      ) : (
        <ul className="space-y-2">
          {selectedStation.schedule.map((schedule, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-4 rounded"
            >
              <div>
                <p>
                  <strong>Date :</strong>{" "}
                  {format(new Date(schedule.date), "PPP")}
                </p>
                <p>
                  <strong>Heure :</strong> {schedule.startTime} -{" "}
                  {schedule.endTime}
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="mr-3">
                    Modifier
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Modifier le Planning</DialogTitle>
                    <DialogDescription>
                      Apportez des modifications aux informations du planning.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <EditScheduleForm
                      station={selectedStation}
                      scheduleIndex={index}
                      onUpdate={() => {}}
                    />
                  </div>
                </DialogContent>
              </Dialog>
              <button
                onClick={() => onDelete(index)}
                className="text-red-500 hover:underline"
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ScheduleList;
