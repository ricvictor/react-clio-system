import styled from "styled-components";
import colors from "../../patters/colors";
import sizes from "../../patters/sizes";

export const Toolbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid  ${colors.lightGray};
    background-color: ${colors.white};
    min-height: 48px;
`

export const Version = styled.span`
    font-size:${sizes.xxs};
    color: ${colors.darkGray};
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 8px;
`

