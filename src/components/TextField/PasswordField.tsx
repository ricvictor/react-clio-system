import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled from "styled-components";
import { TextField } from "./BaseTextField";
import { TextFieldProps } from "./types_d";

const IconEyeContainer = styled.div`
  cursor: pointer;
`;

export function PasswordField(props: TextFieldProps) {
  const [visible, setVisible] = React.useState(false);

  function IconVisible() {
    return visible ? <FaEyeSlash /> : <FaEye />;
  }
  return (
    <TextField
      {...props}
      type={visible?  "text" : "password"}
      endAdornment={
        <IconEyeContainer onClick={()=> setVisible(prev => !prev)}>
          <IconVisible />
        </IconEyeContainer>
      }
    />
  );
}
