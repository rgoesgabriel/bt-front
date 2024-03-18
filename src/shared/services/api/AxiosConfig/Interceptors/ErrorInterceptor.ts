import { AxiosError } from "axios";

export const errorInterceptor = (error: AxiosError) => {
  if (error.message === "Network Error") {
    return Promise.reject(new Error("Erro de Conexão."));
  }

  if (error.response?.status === 401) {
    // a fazer
  }

  return Promise.reject(error);
};
