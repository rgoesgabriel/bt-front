import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../../../shared/services/api/Auth/AuthService";

type TUseAutenticateUser = {
  email: string;
  password: string;
};

const useAutenticateUser = () => {
  return useMutation({
    mutationFn: async ({ email, password }: TUseAutenticateUser) => {
      const response = await AuthService.auth({ email, password });
      return response;
    },
  });
};

export default useAutenticateUser;
