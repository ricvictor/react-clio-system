import React from "react";
import { Typography } from "../Typography";

interface LabelProps {
  children?: React.ReactNode;
}

export function Label({ children }: LabelProps) {
  return (
    <Typography size="xs" weight="bold">
      {children}
    </Typography>
  );
}
