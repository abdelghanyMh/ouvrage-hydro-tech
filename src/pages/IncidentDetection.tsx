// src/pages/IncidentDetection.tsx
import React from 'react';
import IncidentChart from '../components/IncidentChart';

const IncidentDetection: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Incident and Anomaly Detection</h1>
      <IncidentChart />
    </div>
  );
};

export default IncidentDetection;
[]