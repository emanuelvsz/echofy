import { Track } from "@/src/models/track";
import { BackendClient } from "@/src/services/backend-client";
import { useQuery } from "@tanstack/react-query";

export const useOnLoopTrack = () => {
  return useQuery<Track>({
    queryKey: ["track-on-loop"],
    queryFn: async () => {
      const { data } = await BackendClient.get("/track/on-loop");
      return data;
    },
    staleTime: 1000 * 60 * 10,
  });
};
