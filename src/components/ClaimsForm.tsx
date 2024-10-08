import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ClaimsForm: React.FC = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [claim, setClaim] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const claimData = { clientName, email, claim, status: "En attente" };
    try {
      await axios.post("http://localhost:5000/feedback", claimData);
      setClientName("");
      setEmail("");
      setClaim("");
      alert("Réclamation soumise avec succès !");
    } catch (error) {
      console.error("Erreur lors de la soumission de la réclamation :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="clientName">Nom</Label>
        <Input
          id="clientName"
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
          className="w-[500px]"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-[500px]"
        />
      </div>
      <div>
        <Label htmlFor="claim">Réclamation</Label>
        <Textarea
          id="claim"
          value={claim}
          onChange={(e) => setClaim(e.target.value)}
          required
          className="w-[500px]"
        />
      </div>
      <Button type="submit">Soumettre la réclamation</Button>
    </form>
  );
};

export default ClaimsForm;
