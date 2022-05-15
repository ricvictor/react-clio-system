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

export const Primary = Template.bind({});

Primary.args = {
  label: 'Button',
};

