import { LayoutBase } from "../../../shared/layouts";
import useGetAllTournaments from "../queries/useGetAllTournaments";

export const Dashboard = () => {
  const { data } = useGetAllTournaments();

  console.log("Data", data);

  return <LayoutBase title="Página Inicial">Teste</LayoutBase>;
};
