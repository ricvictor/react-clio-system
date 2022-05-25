import React, { ReactNode } from "react";

export interface TextFieldProps {}

interface DefaultIputProps {
  label?: string;
}

export interface TextFieldBaseProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    errorHelper?: string;
  }

export interface TextFieldProps extends DefaultIputProps, TextFieldBaseProps {
  mask?: any;
  startAdornment: ReactNode;
  endAdornment: ReactNode;
}
