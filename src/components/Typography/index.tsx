import React from "react";
import { Text } from "./styles";
import { TypographyProps } from "./types";

export function Typography(props: TypographyProps) {
  return <Text {...props}>{props.children}</Text>;
}

export default Typography;
