import { TopArtistsData } from "@/src/models/artist/top-artists";
import { BackendClient } from "@/src/services/backend-client";
import { useQuery } from "@tanstack/react-query";

export const useTopArtists = (limit: number = 10) => {
  return useQuery<TopArtistsData>({
    queryKey: ["top-artists", limit],
    queryFn: async () => {
      const { data } = await BackendClient.get("/artist/top-artists", {
        params: { limit },
      });
      return data;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export default useTopArtists;
