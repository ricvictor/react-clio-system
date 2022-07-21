import React, { ReactNode } from "react";
import { Typography } from "../Typography";
import {
  DrawerListContainer,
  DrawerListItemIcon,
  DrawerListItemText,
  DrawerListMenuActiveTag
} from "./styles";

export interface DrawerListMenuProps {
  active?: boolean;
  text?: string;
  icon?: ReactNode;
  onClick?: React.MouseEventHandler
}
export function DrawerListMenu(props: DrawerListMenuProps) {
  return (
    <DrawerListContainer>
      <DrawerListMenuActiveTag active={props.active} />
      <DrawerListItemIcon active={props.active}>
        {props.icon}
      </DrawerListItemIcon>
      <DrawerListItemText active={props.active}>
        <Typography>{props.text}</Typography>
      </DrawerListItemText>
    </DrawerListContainer>
  );
}
