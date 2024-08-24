// src/components/IncidentChart.tsx
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const IncidentChart: React.FC = () => {
  const [dataPoints, setDataPoints] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [anomalies, setAnomalies] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPoint = Math.random() * 100;
      setDataPoints((prev) => [...prev.slice(-19), newPoint]);
      setLabels((prev) => [
        ...prev.slice(-19),
        new Date().toLocaleTimeString(),
      ]);
      if (newPoint > 80) {
        setAnomalies((prev) => [...prev, newPoint]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: 'Sensor Data',
        data: dataPoints,
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="space-y-4">
      <Line data={data} />
      {anomalies.length > 0 && (
        <div className="bg-red-100 p-4 rounded">
          <h2 className="text-red-600 font-semibold">Anomalies Detected</h2>
          <ul className="list-disc ml-5">
            {anomalies.map((anomaly, index) => (
              <li key={index}>Value: {anomaly.toFixed(2)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default IncidentChart;
