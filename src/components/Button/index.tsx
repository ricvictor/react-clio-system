import React from "react";
import { ButtonProps } from "./types";

export function Button({ label = "enviar", ...rest }: ButtonProps) {
  return <button {...rest}> {label} </button>;
}
