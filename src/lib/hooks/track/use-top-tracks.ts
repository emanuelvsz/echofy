import { TopHitsData } from "@/src/models";
import { BackendClient } from "@/src/services/backend-client";
import { useQuery } from "@tanstack/react-query";

export const useTopTracks = () => {
  return useQuery<TopHitsData>({
    queryKey: ["top-hits"],
    queryFn: async () => {
      const { data } = await BackendClient.get("/track/top-tracks");
      return data;
    },
  });
};

export default useTopTracks;
