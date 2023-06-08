import { createTheme } from "@mui/material";

const colorSchemes = {
  light: {
    primary: "#f0eded",
    secondary: "#0B4775",
  },
  dark: {
    primary: "#212121",
    secondary: "#757575",
  },
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colorSchemes.light.primary,
    },
    secondary: {
      main: colorSchemes.light.secondary,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colorSchemes.dark.primary,
    },
    secondary: {
      main: colorSchemes.dark.secondary,
    },
  },
});

export { lightTheme, darkTheme };
