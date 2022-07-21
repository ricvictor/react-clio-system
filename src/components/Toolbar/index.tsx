import React from "react";
import { LogoContainer, Toolbar, Version } from "./styles";
interface MainToolbarProps {
  logo: string;
  appVersion: string;
}
export function MainToolbar(props: MainToolbarProps) {
  return (
    <Toolbar>
      <LogoContainer>
        <img src={props.logo} alt="logo" />
        <Version>v{props.appVersion}</Version>
      </LogoContainer>
      <div>others</div>
    </Toolbar>
  );
}
