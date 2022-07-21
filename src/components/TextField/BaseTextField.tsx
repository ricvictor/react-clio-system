import React from "react";
import { Label } from "../Label";
import { Typography } from "../Typography";
import {
  EndAdornmentEl,
  ErrorHelperContet,
  InputBase,
  InputContent,
  LabelContent,
  StartAdornmentEl
} from "./styles";
import { TextFieldProps } from "./types_d";
export function TextField({
  errorHelper,
  label,
  endAdornment,
  startAdornment,
  ...rest
}: TextFieldProps) {
  function SetErrorHelper() {
    return errorHelper ? (
      <ErrorHelperContet>
        <Typography size="xxs">{errorHelper}</Typography>
      </ErrorHelperContet>
    ) : null;
  }

  return (
    <>
      <LabelContent>
        <Label> {label} </Label>
      </LabelContent>
      <InputContent>
        <StartAdornmentEl> {startAdornment} </StartAdornmentEl>
        <InputBase
          extraSpacesStart={!!startAdornment}
          extraSpacesEnd={!!endAdornment}
          {...rest}
        />
        <EndAdornmentEl> {endAdornment} </EndAdornmentEl>
      </InputContent>
      <SetErrorHelper />
    </>
  );
}
