import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../features/posts/api/getPosts.jsx";
//import organizeWeights from "../features/tipmap/organizeWeights.jsx";

export function useRestaurants(center, zoom, northEast, southWest) {
  return useQuery({
    queryKey: ["restaurants", center, zoom, northEast, southWest],
    queryFn: async () => {
      const response = await getPosts(center, zoom, northEast, southWest);
      if (!response || !response.data) {
        return { weightsData: [] };
      }
      return response.data;
    },
    enabled: !!(
      center &&
      center.length === 2 &&
      zoom !== undefined &&
      northEast &&
      southWest
    ),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
