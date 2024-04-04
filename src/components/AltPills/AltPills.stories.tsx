import { default as AltPills, AltPillsProps } from './AltPills'; // Asegúrate de que la ruta sea correcta
import React from 'react';

export default {
  title: 'Beta/AltPills',
  component: AltPills,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'primary_minor', 'secondary_minor', 'accent_minor'],
    },
    selected: {
      control: 'text',
    },
    options: {
      argTypes: {
        label: { control: 'text' },
        value: { control: 'text' },
        onClick: { action: 'clicked' },
      },
    },
  },
};

const options = [
  { label: 'Pill 1', value: 'pill1'},
  { label: 'Pill 2', value: 'pill2', isDisabled: false},
  { label: 'Pill 3', value: 'pill3'},
];

const Template = (args: AltPillsProps) => <AltPills {...args} />;

export const Primary = Template.bind({});
Primary.args ={
  options: options,
  color: 'primary',
  selected: 'pill1',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  color: 'secondary',
};

export const Accent = Template.bind({});
Accent.args = {
  ...Primary.args,
  color: 'accent',
};

export const PrimaryMinor = Template.bind({});
PrimaryMinor.args = {
  ...Primary.args,
  color: 'primary_minor',
};

export const SecondaryMinor = Template.bind({});
SecondaryMinor.args = {
  ...Primary.args,
  color: 'secondary_minor',
};

export const AccentMinor = Template.bind({});
AccentMinor.args = {
  ...Primary.args,
  color: 'accent_minor',
};

export const DisabledPill = Template.bind({});
DisabledPill.args = {
  options: options.map((option, index) => ({...option, isDisabled: index === 1})), // Hace que la segunda píldora esté deshabilitada
  color: 'primary',
  selected: 'pill1',
};
