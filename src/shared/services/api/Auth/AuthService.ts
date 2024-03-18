import { Api } from "../AxiosConfig";

interface IAuth {
  email: string;
  password: string;
}

interface Token {
  accessToken: string;
}

const auth = async ({ email, password }: IAuth): Promise<Token> => {
  const { data } = await Api.get("/auth", { data: { email, password } });

  return data;
};

export const AuthService = { auth };
