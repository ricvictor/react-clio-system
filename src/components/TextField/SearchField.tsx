import React from "react";
import { FaSearch } from "../Icons";
import { TextField } from "./BaseTextField";
import { TextFieldProps } from "./types_d";

export function SearchField(props: TextFieldProps) {
  return <TextField startAdornment={<FaSearch />} {...props} />;
}

