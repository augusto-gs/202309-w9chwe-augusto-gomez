import { DefaultTheme } from "styled-components/dist/types";
import "@fontsource/ibm-plex-mono";

const mainTheme: DefaultTheme = {
  colors: {
    background: "#D81159",
    primary: "#FFBC42",
    secondary: "#218380",
  },

  typography: {
    main: "'Merriweather', sans-serif;",
    secondary: "'IBM Plex Mono', sans-serif;",
  },
};

export default mainTheme;
