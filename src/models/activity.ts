import { User } from "./user";

export interface FriendActivity {
  id: string;
  user: User;
  currentTrack: {
    title: string;
    artist: string;
  };
  timestamp: string;
}