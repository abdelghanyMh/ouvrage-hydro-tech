// src/components/IncidentChart.tsx
import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import toast, { Toaster } from "react-hot-toast";

import { AuthContext } from "@/context/AuthContext";
function getRandomItem(arr: any) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
interface Anomali {
  name: string;
  value: number;
}
const getNames = (anomaliArray: Anomali[]): string[] => {
  return anomaliArray.map((anomali) => anomali.name);
};
const IncidentChart: React.FC = () => {
  const [dataPoints, setDataPoints] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [anomalies, setAnomalies] = useState<Anomali[]>([]);
  const { stations } = useContext(AuthContext);
  let names: string[] = [];

  names = getNames(stations);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPoint = Math.random() * 100;
      setDataPoints((prev) => [...prev.slice(-19), newPoint]);
      setLabels((prev) => [
        ...prev.slice(-19),
        new Date().toLocaleTimeString(),
      ]);
      if (newPoint > 80) {
        const name = getRandomItem(names);

        toast.error(`${name}- Value: ${newPoint}`, {
          duration: 1000, // duration in milliseconds
        });
        setAnomalies((prev) => [...prev, { name: name, value: newPoint }]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Sensor Data",
        data: dataPoints,
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
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
            {anomalies.map(({ name, value }, index) => {
              return (
                <>
                  <li key={index}>
                    {name} - Value: {value.toFixed(2)}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default IncidentChart;
