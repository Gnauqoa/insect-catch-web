import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    batterySlider: {
      high: "#28b360",
      good: "#28b360",
      normal: "#f0c419",
      week: "#e77d27",
      veryWeek: "#c03b2a",
    },
    textField: {
      main: "F3C2DA",
    },
    primary: {
      main: "#FFAB00",
    },
    secondary: {
      main: "#FFE8F3",
      contrastText: "#D63384",
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
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
            {
              display: "none",
            },
          "& input[type=number]": {
            MozAppearance: "textfield",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          width: "100%",
          borderStyle: "solid",
          borderWidth: "3px",
          borderColor: "transparent",
        },
      },
      variants: [
        {
          props: { variant: "primary filled" },
          style: {
            color: "#FFFFFF",
            background: "#FFAB00",
            ":hover": {
              background: "#CC8900",
            },
            ":focus": {
              background: "#FFAB00",
              borderColor: "#FFDD96",
            },
            ":disabled": {
              color: "#ffffff",
              background: "#9D9AA4",
            },
          },
        },
        {
          props: { variant: "primary link" },
          style: {
            color: "#FFAB00",
            background: "transparent",
            ":hover": {
              color: "#CC8900",
            },
            ":focus": {
              color: "#CC8900",
            },
            ":disabled": {
              color: "#ffffff",
              background: "#9D9AA4",
            },
          },
        },
        {
          props: { size: "small" },
          style: {
            width: 97,
            height: 32,
            fontSize: 12,
            fontWeight: 600,
          },
        },
        {
          props: { size: "medium" },
          style: {
            width: 137,
            height: 44,
            fontSize: 14,
            fontWeight: 700,
          },
        },
        {
          props: { size: "large" },
          style: {
            width: 168,
            height: 54,
            fontSize: 16,
            fontWeight: 700,
          },
        },
      ],
    },
  },
});

export default theme;
