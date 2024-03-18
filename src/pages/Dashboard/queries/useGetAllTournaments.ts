import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "../../../shared/services/api";

enum QueryKeys {
  GET_ALL_TOURNAMENTS = "GET_ALL_TOURNAMENTS",
}

const useGetAllTournaments = () =>
  useQuery({
    queryKey: [QueryKeys.GET_ALL_TOURNAMENTS],
    queryFn: async () => {
      const response = await DashboardService.getDashboardTournaments();
      return response;
    },
  });

export default useGetAllTournaments;
