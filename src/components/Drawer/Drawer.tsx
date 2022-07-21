import React, { ReactNode } from "react";
import constants from "./constants";
import { DrawnerStyled } from "./styles";

interface DrawerProps {
  open?: boolean;
  children?: ReactNode;
}

export default function Drawer({ children, open }: DrawerProps) {
  function setDrawerProperties() {
    const width = open ? "250px" : "0px";
    document.getElementById(constants.DRAWED_NAME).style.width = width;
    document.getAnimations();
    const cantainer = document.getElementById(constants.DRAWED_CONTAINER_NAME);
    if (cantainer) {
      cantainer.style.marginLeft = width;
    }
  }

  React.useEffect(() => {
    setDrawerProperties()
  }, [open]);

  return (
    <>
      <DrawnerStyled id={constants.DRAWED_NAME}>{children}</DrawnerStyled>
    </>
  );
}
