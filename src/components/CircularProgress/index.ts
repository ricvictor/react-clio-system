import styled, { keyframes } from "styled-components";
import colors from "../../patters/colors";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

interface CircularProgressProps {
  size?: number
}

const size = (props:CircularProgressProps) => props.size ? props.size : 20; 
export const CircularProgress = styled.div<CircularProgressProps>`
  border: 2px solid ${colors.white};
  border-radius: 50%;
  border-top: 2px solid ${colors.mediumGray};
  width: ${size}px;
  height: ${size}px;
  animation: ${rotate} 0.5s linear infinite;
`;
