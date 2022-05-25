import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AiFillApple, AiFillCamera } from "react-icons/ai";
import TextField from "../../components/TextField";

export default {
  title: "components/TextField",
  component: TextField,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Main = Template.bind({});

Main.args = {
  label: "text-field",
  placeholder: "input here something",
};

export const AdornmentStart = Template.bind({});

AdornmentStart.args = {
  label: "text-field",
  placeholder: "input here something",
  startAdornment: <AiFillCamera />,
};

export const AdornmentEnd = Template.bind({});

AdornmentEnd.args = {
  label: "text-field",
  placeholder: "input here something",
  endAdornment: (
    <AiFillApple
      style={{ cursor: "pointer" }}
      onClick={() => {
        alert("clicado");
      }}
    />
  ),
};


export const Error = Template.bind({});

Error.args = {
  label: "text-field",
  placeholder: "input here something",
  error: true,
  errorHelper: "invalid value"
};