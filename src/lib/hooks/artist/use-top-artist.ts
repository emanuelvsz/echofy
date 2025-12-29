import { TopArtist } from "@/src/models/artist";
import { BackendClient } from "@/src/services/backend-client";
import { useQuery } from "@tanstack/react-query";

export const useTopArtist = () => {
  return useQuery<TopArtist>({
    queryKey: ["top-artist"],
    queryFn: async () => {
      const { data } = await BackendClient.get("/artist/top-artist");
      return data;
    },
    staleTime: 1000 * 60 * 5,
  });
};
