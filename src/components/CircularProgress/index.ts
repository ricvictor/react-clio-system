import styled, { keyframes } from 'styled-components';
import colors from "../../utils/colors";

const loadAnimation = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;


export const CircularProgress =  styled.div`
    border: 2px solid ${colors.white};
    border-radius: 50%;
    border-top: 2px solid ${colors.mediumGray};
    width: 30px;
    height: 30px;
    ${loadAnimation}
`