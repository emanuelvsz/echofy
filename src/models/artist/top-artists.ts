import { Artist } from "./artist";

export interface TopArtistsData {
  week: Artist[];
  month: Artist[];
  year: Artist[];
}