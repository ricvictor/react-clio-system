import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from '../../components/Button/index';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});

Contained.args = {
  label: 'Contained',
  size: 'medium',
  variant: 'contained',
};

export const Outlined = Template.bind({});

Outlined.args = {
  label: 'Outlined',
  size: 'large',
  variant: 'outlined'
};

export const Text = Template.bind({});

Text.args = {
  label: 'Outlined',
  size: 'large',
  variant: 'text'
};