export interface Schedule {
  date: string;
  startTime: string;
  endTime: string;
}

export interface PumpStation {
  id: string;
  name: string;
  location: string;
  schedule: Schedule[];
}
