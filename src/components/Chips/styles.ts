import styled from "styled-components";
import colors from "../../patters/colors";
import { AlertProps } from "./types";

interface ChipsElementProps {
  border?: boolean;
  background?: boolean;
  whiteColor?: boolean;
  alert?: AlertProps;
}

function setMainColor(color: string, alert?: AlertProps) {
  const options = {
    success: () => colors.darkSuccess,
    successLigth: () => colors.lightSuccess,
    error: () => colors.mediumError,
    errorLigth: () => colors.lightError,
    warning: () => colors.mediumAlert,
    warningLigth: () => colors.lightAlert,
  };
  return alert && options[alert] ? options[alert]() : color;
}

function setMainTextColor(color: string, alert?: AlertProps) {
  const options = {
    success: () => colors.white,
    error: () => colors.white,
    warning: () => colors.white,
    successLigth: () => colors.darkSuccess,
    errorLigth: () => colors.mediumError,
    warningLigth: () => colors.mediumAlert,
  };
  return alert && options[alert] ? options[alert]() : color;
}
const color = (props: ChipsElementProps) =>
  props.whiteColor
    ? colors.white
    : setMainTextColor(colors.mainBlue, props.alert);

export const ChipsBase = styled.div<ChipsElementProps>`
  display: flex;
  padding: 0.281rem 1rem; // 4.5px 16px
  position: relative;
  border-radius: 100px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: ${(props) =>
    props.border
      ? "1px solid" + setMainColor(colors.mainBlue, props.alert)
      : "1px solid" + setMainColor(colors.transparent)};
  background-color: ${(props) =>
    props.background
      ? setMainColor(colors.mainBlue, props.alert)
      : colors.transparent};
  color: ${color};
  svg {
    color: ${color};
  }
`;

export const ChipButtonElement = styled.div({
    marginLeft: '0.5rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
})