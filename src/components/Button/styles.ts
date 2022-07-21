import styled from 'styled-components';
import colors from '../../patters/colors';
import { ButtonProps } from "./types";

export const ElementButton = styled.button<ButtonProps>`
    width:${props => props.fullwidth ? '100%' : 'auto'};
    border-radius: 4px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.469rem 1rem; // 7.5px  16px 
    outline: none;
    position: relative;
    cursor: pointer;
    
    :disabled {
        opacity: 0.4;
    }

    :hover {
       background-color: ${colors.accentBlue};
       transition: 0.3s;
       color: ${colors.mainBlue};
    }
`;

export const ContainedButton = styled(ElementButton)`
    background-color: ${colors.mainBlue};
    color: ${colors.white};
`;

export const TextButton = styled(ElementButton)`
    background-color: transparent;
    border:none;
    color: ${colors.mainBlue};
`

export const Outlined = styled(ElementButton)`
    background-color: transparent;
    border: 1px solid ${colors.mainBlue};
    color: ${colors.mainBlue};
`