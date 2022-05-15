import styled, { css } from "styled-components";
import sizes from "../../utils/sizes";
import weights from "../../utils/weights";
import { TypographyProps } from "./types";

export const fontsCSS = css`
  @font-face {
    font-family: "Inter";
    src: url("../../assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf");
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
`;

export const Text = styled.span<TypographyProps>`
  ${fontsCSS}
  font-size: ${(props) => (props.size ? sizes[props.size] : sizes.medium)};
  font-weight: ${(props) =>
    props.weight ? weights[props.weight] : weights.regular};
`;
