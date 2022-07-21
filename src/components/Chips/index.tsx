import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Typography } from "../Typography";
import { ChipButtonElement, ChipsBase } from "./styles";
import { ChipsProps } from "./types";

export function Chips({
  label,
  onClose,
  alert,
  variant = "contained",
}: ChipsProps) {
  function CloseButon() {
    return (
      <ChipButtonElement onClick={onClose}>
        <AiFillCloseCircle />
      </ChipButtonElement>
    );
  }
  /*
   * There is no experiencie without background color in case of success, warning or error
   * so, doens't make sense to load a component with alert and text or outline attributes in
   * the same instance.
   */
  if (alert) variant = "contained";

  const chipsProps = {
    border: variant === "contained" || variant === "outlined",
    background: variant === "contained",
    whiteColor: !alert && variant === "contained",
    alert,
  };

  return (
    <ChipsBase {...chipsProps}>
      <Typography size="small"> {label} </Typography>
      {onClose ? <CloseButon /> : null}
    </ChipsBase>
  );
}
