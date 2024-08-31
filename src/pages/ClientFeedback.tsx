import React, { useContext } from "react";
import FeedbackForm from "../components/FeedbackForm";
import ClaimsForm from "../components/ClaimsForm";
import FeedbackList from "../components/FeedbackList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AuthContext } from "@/context/AuthContext";

const ClientFeedback: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-6">
        Retours et Réclamations des Clients
      </h1>
      {user ? (
        <FeedbackList />
      ) : (
        <Tabs
          defaultValue="feedback"
          className="mb-6 flex flex-col items-center justify-center w-full"
        >
          <TabsList>
            <TabsTrigger value="feedback" className="text-base font-bold">
              Retour
            </TabsTrigger>
            <TabsTrigger value="claims" className="text-base font-bold">
              Réclamation
            </TabsTrigger>
          </TabsList>
          <TabsContent value="feedback">
            <FeedbackForm />
          </TabsContent>
          <TabsContent value="claims">
            <ClaimsForm />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default ClientFeedback;
