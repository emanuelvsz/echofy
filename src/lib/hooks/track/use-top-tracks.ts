import { TopHitsData } from "@/src/models";
import { BackendClient } from "@/src/services/backend-client";
import { useQuery } from "@tanstack/react-query";

export const useTopTracks = (limit: number = 10) => {
  return useQuery<TopHitsData>({
    queryKey: ["top-hits", limit],
    queryFn: async () => {
      const { data } = await BackendClient.get("/track/top-tracks", {
        params: { limit }, 
      });
      return data;
    },
  });
};

export default useTopTracks;
