import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Chips } from '../../components/Chips/index';

export default {
  title: 'components/Chips',
  component: Chips,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Chips>;

const Template: ComponentStory<typeof Chips> = (args) => <Chips {...args} />;

export const Contained = Template.bind({});

Contained.args = {
  label: 'Clio-chip',
};

export const Text = Template.bind({});

Text.args = {
  label: 'Clio-chip',
  variant: "text"
};

export const Outlined = Template.bind({});

Outlined.args = {
  label: 'Clio-chip',
  variant: 'outlined',
};

export const CloseButton = Template.bind({});

CloseButton.args = {
  label: 'Close button',
};

export const Error = Template.bind({});

Error.args = {
  label: 'Clio-chip',
  variant: 'outlined',
  alert: 'error'
};

export const ErrorLigth = Template.bind({});

ErrorLigth.args = {
  label: 'Clio-chip',
  variant: 'outlined',
  alert: 'errorLigth'
};

export const Success = Template.bind({});

Success.args = {
  label: 'Clio-chip',
  variant: 'outlined',
  alert: 'success'
};

export const SuccessLigth = Template.bind({});

SuccessLigth.args = {
  label: 'Clio-chip',
  variant: 'outlined',
  alert: 'successLigth'
};


export const Warning = Template.bind({});

Warning.args = {
  label: 'Clio-chip',
  variant: 'outlined',
  alert: 'warning'
};

export const WarningLigth = Template.bind({});

WarningLigth.args = {
  label: 'Clio-chip',
  variant: 'outlined',
  alert: 'warningLigth'
};

