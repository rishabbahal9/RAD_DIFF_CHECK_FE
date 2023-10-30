import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5e9e00",
      light: "#5e9e00",
      dark: "#5e9e00",
      contrastText: "#000",
    },
    secondary: {
      main: "#a4a4a4",
      light: "#a4a4a4",
      dark: "#a4a4a4",
      contrastText: "#000",
    },
  },
});

export default theme;
