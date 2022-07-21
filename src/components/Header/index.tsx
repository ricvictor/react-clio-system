import { HeaderProps } from "./types";
import { InfoContainer, ItensContainer, StyledContainerVersion, StyledHeader, VerticalLine } from "./style";

import Typography from "../Typography";

import { ThemeProvider } from "styled-components";
import React from "react";

export function Header({
    logo,
    headerItens,
    branchName,
    version = "1.0",
    theme = "dark",
}: HeaderProps) {
    return (
        <ThemeProvider theme={{ mode: theme }}>
            <StyledHeader>
                <InfoContainer>     
                    {logo}
                    <StyledContainerVersion>
                        <Typography size="xxs" weight="regular">V.{version}</Typography>
                    </StyledContainerVersion> 
                    <VerticalLine />
                    <Typography size="small" weight="regular">{branchName}</Typography>
                </InfoContainer>
                <ItensContainer>
                    {headerItens}
                </ItensContainer>
            </StyledHeader>
        </ThemeProvider>
    );
}