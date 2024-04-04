import React from 'react';
import { default as Button, ButtonProps } from './Button';
import SystemUploadAlt from '../Icons/SystemUpdateAlt';

export default {
  title: 'Beta/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: [
        'default', 'primary', 'secondary', 'accent',
        'primary_minor', 'secondary_minor', 'accent_minor',
        'bad', 'good', 'beware', 'bad_minor', 'good_minor', 'beware_minor'
      ],
    },
    type: {
      control: 'select',
      options: ['filled', 'outline', 'text'],
    },
    size: {
      control: { type: 'radio' },
      options: ['none', 'stretched'], // Añade 'undefined' para representar la ausencia de esta prop
    },
    isDisabled: {
      control: 'boolean',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    onClick: { action: 'clicked' },
  },
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  color: 'primary',
  type: 'filled',
  
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  color: 'secondary',
  type: 'outline',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: 'Button with Icon',
  color: 'accent',
  type: 'filled',
  children: <SystemUploadAlt />,
  iconPosition: 'left',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  color: 'default',
  type: 'filled',
  isDisabled: true,
};

export const Stretched = Template.bind({});
Stretched.args = {
  text: 'Stretched Button',
  color: 'good',
  type: 'filled',
  size: 'stretched',
};
