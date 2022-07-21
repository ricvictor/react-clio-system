import styled, { css } from "styled-components";
import sizes from "../../utils/sizes";
import weights from "../../utils/weights";
import { TypographyProps } from "./types";

export const Text = styled.span<TypographyProps>`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: ${(props) => (props.size ? sizes[props.size] : sizes.medium)};
  font-weight: ${(props) =>
    props.weight ? weights[props.weight] : weights.regular};
`;
