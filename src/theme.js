import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D63384",
    },
    secondary: {
      main: "#FFE8F3",
      contrastText: "#D63384"
    },
    text_neutral: {
      main: "#777E91",
    },
    border_neutral: {
      main: "#F3F3F3",
      sub: "#E6E8EC",
    },
    border_moreDark: {
      main: "#E6E8EC",
    },
    text_black: { main: "#23262F" },
    text_green: { main: "#45B26B" },
  },
});

export default theme