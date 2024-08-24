// src/components/ScheduleList.tsx
import React from "react";
import { format } from "date-fns";

interface Schedule {
  date: string;
  startTime: string;
  endTime: string;
}

interface Props {
  schedules: Schedule[];
  onDelete: (index: number) => void;
}

const ScheduleList: React.FC<Props> = ({ schedules, onDelete }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Scheduled Operations</h2>
      {schedules.length === 0 ? (
        <p>No schedules available.</p>
      ) : (
        <ul className="space-y-2">
          {schedules.map((schedule, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-4 rounded"
            >
              <div>
                <p>
                  <strong>Date:</strong>{" "}
                  {format(new Date(schedule.date), "PPP")}
                </p>
                <p>
                  <strong>Time:</strong> {schedule.startTime} -{" "}
                  {schedule.endTime}
                </p>
              </div>
              <button
                onClick={() => onDelete(index)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ScheduleList;
