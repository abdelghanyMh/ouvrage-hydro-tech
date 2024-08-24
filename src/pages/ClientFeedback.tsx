// src/pages/ClientFeedback.tsx
import React, { useState } from "react";
import FeedbackForm from "../components/FeedbackForm";
import ClaimsForm from "../components/ClaimsForm";
import FeedbackList from "../components/FeedbackList";
import { Button } from "@/components/ui/button";
[];
const ClientFeedback: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"feedback" | "claims">("feedback");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Client Feedback and Claims</h1>
      <div className="flex space-x-4 mb-6">
        <Button
          variant={activeTab === "feedback" ? "default" : "ghost"}
          onClick={() => setActiveTab("feedback")}
        >
          Feedback
        </Button>
        <Button
          variant={activeTab === "claims" ? "default" : "ghost"}
          onClick={() => setActiveTab("claims")}
        >
          Claims
        </Button>
      </div>
      {activeTab === "feedback" ? <FeedbackForm /> : <ClaimsForm />}
      <FeedbackList />
    </div>
  );
};

export default ClientFeedback;
