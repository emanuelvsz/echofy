"use client";

import { Users, Heart } from "lucide-react";
import { FriendActivity as FriendActivityModel } from "@/src/models";

const ACTIVITIES: FriendActivityModel[] = [
  {
    id: "1",
    user: {
      id: "u1",
      name: "Alice",
      username: "alice_vibes",
      initials: "A",
      color: "bg-pink-500",
      status: "online",
    },
    currentTrack: {
      title: "Espresso",
      artist: "Sabrina Carpenter",
    },
    timestamp: "agora",
  },
  {
    id: "2",
    user: {
      id: "u2",
      name: "Emanuel",
      username: "bob_builder",
      initials: "E",
      color: "bg-blue-500",
      status: "online",
    },
    currentTrack: {
      title: "Sanctuary",
      artist: "Joji",
    },
    timestamp: "há 5 min",
  },
  {
    id: "3",
    user: {
      id: "u3",
      name: "Charlie",
      username: "charlie_brown",
      initials: "C",
      color: "bg-green-500",
      status: "online",
    },
    currentTrack: {
      title: "Humble",
      artist: "Kendrick Lamar",
    },
    timestamp: "há 12 min",
  },
];

export const FriendActivity = () => (
  <div className="md:col-span-2 bg-zinc-900/50 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/5">
    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
      <Users size={20} className="text-purple-400" /> O que estão ouvindo
    </h3>
    <div className="space-y-4">
      {ACTIVITIES.map((activity) => (
        <div
          key={activity.id}
          className="flex items-center justify-between p-3 hover:bg-white/5 rounded-2xl transition-all group"
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 ${activity.user.color} rounded-full flex items-center justify-center font-bold text-sm shadow-lg`}
            >
              {activity.user.initials}
            </div>
            <div>
              <p className="font-bold text-sm group-hover:text-purple-400 transition-colors">
                {activity.user.name}
              </p>
              <p className="text-xs text-gray-500">
                {activity.currentTrack.title} — {activity.currentTrack.artist}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-zinc-600 font-medium uppercase tracking-tighter">
              {activity.timestamp}
            </span>
            <Heart
              size={16}
              className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);
