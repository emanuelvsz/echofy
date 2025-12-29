export interface Track {
  id: number | string;
  title: string;
  artist: string;
  plays: string;
  cover: string; 
}

export type Period = "week" | "month" | "year";

export interface TopHitsData {
  week: Track[];
  month: Track[];
  year: Track[];
}