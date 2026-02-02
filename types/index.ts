export interface VideoCreationData {
  niche: string | null;

  language: string;
  voice: string;
  music: string;
  videoStyle: string;
  captionStyle: string;
  seriesName: string;
  duration: "30-50" | "60-70" | "";
  platform: string;
  scheduleTime: string; // ISO string for simplicity
}
