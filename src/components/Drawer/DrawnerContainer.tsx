import React, { PropsWithChildren } from "react";
import { Typography } from "../Typography";
import { DrawerContent } from "./styles";

export function DrawnerContainer(props: PropsWithChildren<any>) {
  return (
    <DrawerContent id="drawne-main-container">
      <Typography> {props.children} </Typography>
    </DrawerContent>
  );
}

export default DrawnerContainer;
