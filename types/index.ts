export interface VideoCreationData {
  niche: string | null;

  language: string;
  voice: string;
  music: string;
  videoStyle: string;
  captionStyle: string;
  seriesName: string;
  duration: "30-50" | "60-70" | "";
  platform: string[];
  scheduleTime: string; // ISO string for simplicity
}

export interface VideoSeries {
  id: string;
  user_id: string;
  niche: string | null;
  language: string;
  voice: string;
  music: string;
  video_style: string;
  caption_style: string;
  series_name: string;
  duration: string;
  platform: string;
  schedule_time: string | null;
  status: string;
  video_url: string | null;
  created_at: string;
  updated_at: string;
}
