import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      secondary: string;
      dark: string;
      friend: string;
      enemy: string;
    };

    typography: {
      main: string;
      secondary: string;
    };
  }
}
