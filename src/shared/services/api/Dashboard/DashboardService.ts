import { Api } from "../AxiosConfig";

interface IDashboardTournaments {
  id: number;
  local: string;
  data: string;
}

type TDashboardTournaments = {
  data: IDashboardTournaments[];
};

const getDashboardTournaments = async (): Promise<TDashboardTournaments[]> => {
  const { data } = await Api.get("/dashboard");

  return data;
};

export const DashboardService = {
  getDashboardTournaments,
};
