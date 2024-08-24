// src/components/FeedbackForm.tsx
import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FeedbackForm: React.FC = () => {
  const [clientName, setClientName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const feedback = { clientName, message, status: "Pending" };
    try {
      await axios.post("http://localhost:5000/feedback", feedback);
      setClientName("");
      setMessage("");
      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="clientName">Name</Label>
        <Input
        className="w-[500px]"
          id="clientName"
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="message">Feedback</Label>
        <Textarea
                className="w-[500px]"

          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Submit Feedback</Button>
    </form>
  );
};

export default FeedbackForm;
