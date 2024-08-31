import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PumpStation } from "./types";
import { AuthContext } from "@/context/AuthContext";

const CreatePumpStationForm: React.FC = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const { addStation } = useContext(AuthContext);

  const generateRandomId = (): string => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < 3; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newStation: PumpStation = {
      id: generateRandomId(),
      name: name,
      location: location,
      schedule: [],
    };
    addStation(newStation);
  };

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
        Créer la station de pompage
      </Button>
    </form>
  );
};

export default CreatePumpStationForm;
