import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import {
  AppThemeProvider,
  AppDrawerProvider,
  AuthProvider,
} from "./shared/contexts";
import { ButtonTheme, DrawerMenu } from "./shared/components";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./shared/services";
import { Login } from "./pages";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppThemeProvider>
          <AppDrawerProvider>
            <Login>
              <BrowserRouter>
                <DrawerMenu>
                  <AppRoutes />
                </DrawerMenu>
                <ButtonTheme />
              </BrowserRouter>
            </Login>
          </AppDrawerProvider>
        </AppThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};
