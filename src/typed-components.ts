import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

interface IThemeInterface {
  maxWidth: string;
  bgColor: string;
  mainColor: string;
  blackColor: string;
  darkGreyColor: string;
  whiteGrey: string;
  lightGreyColor: string;
  redColor: string;
  blueColor: string;
  darkBlueColor: string;
  boxBorder: string;
  borderRadius: string;
  whiteBox: string;
}

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { css, keyframes, ThemeProvider, createGlobalStyle };
export default styled;
