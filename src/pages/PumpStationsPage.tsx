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
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button } from "@/components/ui/button";

import EditPumpStationForm from "@/components/EditPumpStationForm";
import CreatePumpStationForm from "@/components/CreatePumpStationForm";

const StationList = () => {
  const { stations, deleteStation } = useContext(AuthContext);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Gestion des Stations de Pompe</h1>

      <Table>
        <TableCaption>Liste des Stations de Pompe.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nom</TableHead>
            <TableHead>Emplacement</TableHead>
            <TableHead>Planning Actuel</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stations.map((station: any) => (
            <TableRow key={station.id}>
              <TableCell className="font-medium">{station.id}</TableCell>
              <TableCell>{station.name}</TableCell>
              <TableCell>{station.location}</TableCell>
              <TableCell>
                {station.schedule.length > 0
                  ? `${station.schedule[0].startTime} - ${station.schedule[0].endTime}`
                  : "Pas de Planning"}
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="default" className="mr-3">
                      Modifier
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Modifier la Station de Pompe</DialogTitle>
                      <DialogDescription>
                        Apportez des modifications aux informations de la
                        station de pompe.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <EditPumpStationForm station={station} />
                    </div>
                  </DialogContent>
                </Dialog>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button variant="destructive">Supprimer</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Êtes-vous absolument sûr ?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Cette action est irréversible. Cela supprimera
                        définitivement{" "}
                        <span className="uppercase text-destructive font-bold underline px-1">
                          {station.name}
                        </span>
                        Station de Pompe
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Annuler</AlertDialogCancel>
                      <AlertDialogAction
                        className="!bg-destructive"
                        onClick={() => deleteStation(station.id)}
                      >
                        Supprimer
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-slate-50">
          <TableRow>
            <TableCell colSpan={4}>
              Créer une nouvelle Station de Pompe
            </TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className="mr-3 bg-green-300 hover:bg-green-100"
                  >
                    Créer
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Créer une Station de Pompe</DialogTitle>
                    <DialogDescription>
                      Ajoutez une nouvelle station de pompe.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <CreatePumpStationForm />
                  </div>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default StationList;
