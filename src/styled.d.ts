import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    red: string;
    dark: string;
    light: string;

    foreground: string;
    foregroundSecondary: string;
    foregroundTertiary: string;

    background: string;
    backgroundSecondary: string;
    backgroundTertiary: string;

    fontMonospace: string;
  }
}
