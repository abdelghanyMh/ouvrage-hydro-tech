import React, { useEffect, useState } from "react";
import axios from "axios";
import { MessageCircleWarning, MessageSquareQuote } from "lucide-react";

interface Feedback {
  id: number;
  clientName: string;
  message?: string;
  claim?: string;
  email?: string;
  status: string;
}

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/feedback");
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des retours :", error);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Retours et réclamations soumis
      </h2>
      {feedbacks.length === 0 ? (
        <p>Aucun retour ou réclamation soumis pour l'instant.</p>
      ) : (
        <ul className="space-y-4">
          {feedbacks.map((fb) => (
            <li key={fb.id} className="bg-gray-100 p-4 rounded">
              {!fb.claim && <MessageSquareQuote />}
              {fb.claim && <MessageCircleWarning />}

              <p>
                <strong>Nom :</strong> {fb.clientName}
              </p>
              {fb.email && (
                <p>
                  <strong>Email :</strong> {fb.email}
                </p>
              )}
              {fb.message && (
                <p>
                  <strong>Retour :</strong> {fb.message}
                </p>
              )}
              {fb.claim && (
                <p>
                  <strong>Réclamation :</strong> {fb.claim}
                </p>
              )}
              <p>
                <strong>Status :</strong> {fb.status}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
