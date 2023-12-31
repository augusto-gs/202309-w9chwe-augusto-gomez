import { DefaultTheme } from "styled-components/dist/types";
import "@fontsource/ibm-plex-mono";
import "@fontsource/merriweather";

const mainTheme: DefaultTheme = {
  colors: {
    background: "#D81159",
    primary: "#FFBC42",
    secondary: "#218380",
    dark: "#000",
    light: "#fff",
    enemy: "#E54F6D",
    friend: "#4381C1",
  },

  typography: {
    main: "'Merriweather', sans-serif;",
    secondary: "'IBM Plex Mono', sans-serif;",
  },
};

export default mainTheme;
