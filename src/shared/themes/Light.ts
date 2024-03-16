import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#1769aa",
      dark: "#2196f3",
      light: "#4dabf5",
      contrastText: "#fff",
    },
    secondary: {
      main: "#a31545",
      dark: "#e91e63",
      light: "#ed4b82",
      contrastText: "#000",
    },
    background: {
      default: "#ffebee",
      paper: "#ffcdd2",
    },
  },
});
