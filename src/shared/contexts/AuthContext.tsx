/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
// import useAutenticateUser from "../../pages/Login/queries/useAutenticateUser";
import { AuthService } from "../services/api/Auth/AuthService";

interface IAuthContextData {
  isAutenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

interface IAuthProviderProps {
  children: React.ReactNode;
}

const LOCAL_STORAGE_KEY = "APP_ACCESS_TOKEN";

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>();
  //   const { mutate: autenticate, data } = useAutenticateUser();

  const isAutenticated = useMemo(() => !!accessToken, [accessToken]);

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (accessToken) {
      setAccessToken(JSON.parse(accessToken));
    } else {
      setAccessToken(undefined);
    }
  }, []);

  //   const login = useCallback(
  //     (email: string, password: string) => {
  //       autenticate({ email, password });
  //       localStorage.setItem(
  //         LOCAL_STORAGE_KEY,
  //         JSON.stringify(data?.accessToken)
  //       );
  //       console.log("data", data?.accessToken);
  //       setAccessToken(data?.accessToken);
  //     },
  //     [autenticate, data]
  //   );
  const login = useCallback(async (email: string, password: string) => {
    const result = await AuthService.auth({ email, password });
    if (result instanceof Error) {
      return result.message;
    } else {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(result.accessToken)
      );
      setAccessToken(result.accessToken);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setAccessToken(undefined);
  }, []);

  const context = useMemo(
    () => ({
      logout,
      login,
      isAutenticated,
    }),
    [login, logout, isAutenticated]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
