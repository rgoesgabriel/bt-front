import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Tooltip from "@mui/material/Tooltip";
import { Icon } from "@mui/material";
import { useAppThemeContext } from "../../contexts";

export const ButtonTheme: React.FC = (props) => {
  const { themeName, toggleTheme } = useAppThemeContext();

  const titleTooltip = themeName === "light" ? "Tema Escuro" : "Tema Claro";
  const icon = themeName === "light" ? "dark_mode" : "light_mode";

  return (
    <Tooltip title={titleTooltip}>
      <Box
        sx={{
          backgroundColor: "background.default",
          borderRadius: "50%",
          bottom: 0,
          boxShadow: 16,
          margin: (theme) => theme.spacing(4),
          position: "fixed",
          right: 0,
          zIndex: (theme) => theme.zIndex.speedDial,
        }}
        {...props}
      >
        <ButtonBase
          onClick={toggleTheme}
          sx={{
            backgroundColor: "primary.main",
            borderRadius: "50%",
            color: "primary.contrastText",
            p: "10px",
          }}
        >
          <Icon>{icon}</Icon>
        </ButtonBase>
      </Box>
    </Tooltip>
  );
};
