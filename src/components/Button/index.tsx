import React from "react";
import { CircularProgress } from "../CircularProgress";
import { Typography } from "../Typography";
import { ContainedButton, Outlined, TextButton } from "./styles";
import { ButtonProps } from "./types";

export function Button({
  label = "enviar",
  size = "medium",
  variant = "contained",
  loading,
  ...rest
}: ButtonProps) {
  function Content() {
    return loading ? (
      <CircularProgress size={15} />
    ) : (
      <Typography weight="bold">{label}</Typography>
    );
  }

  switch (variant) {
    case "contained":
      return (
        <ContainedButton {...rest}>
          <Content />
        </ContainedButton>
      );
    case "text":
      return (
        <TextButton {...rest}>
          <Content />
        </TextButton>
      );
    case "outlined":
      return (
        <Outlined {...rest}>
          <Content />
        </Outlined>
      );
  }
}
