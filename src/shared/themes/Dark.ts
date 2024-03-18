import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0e4686",
      dark: "#1565c0",
      light: "#4383cc",
      contrastText: "#fff",
    },
    secondary: {
      main: "#790e3c",
      dark: "#ad1457",
      light: "#bd4378",
      contrastText: "#000",
    },
    background: {
      default: "#00838f",
      paper: "#00acc1",
    },
  },
  typography: {
    allVariants: {
      color: "white",
    },
  },
});
