import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { PumpStation } from "./types";

interface EditPumpStationFormProps {
  station: PumpStation;
}

const EditPumpStationForm: React.FC<EditPumpStationFormProps> = ({
  station,
}) => {
  const { updateStation } = useContext(AuthContext);

  const [name, setName] = useState(station.name);
  const [location, setLocation] = useState(station.location);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedStation: PumpStation = {
      id: station.id,
      name: name,
      location: location,
      schedule: station.schedule,
    };
    updateStation(updatedStation);
  };

  useEffect(() => {
    setName(station.name);
    setLocation(station.location);
  }, [station]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Nom de la station</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="location">Emplacement</Label>
        <Input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      <Button type="submit" variant="default">
        Enregistrer les modifications
      </Button>
    </form>
  );
};

export default EditPumpStationForm;
