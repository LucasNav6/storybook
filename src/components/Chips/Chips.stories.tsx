// Chips.stories.tsx
import React from 'react';
import { default as Chips, ChipProps } from './Chips'; // Asegura que la ruta sea correcta
import CloseSmall from '../Icons/CloseSmall'; // Verifica la ruta del ícono

export default {
  title: 'Beta/Chips',
  component: Chips,
  argTypes: {
    type: {
      control: 'select',
      options: ['outline', 'filled'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'primary_minor', 'secondary_minor', 'accent_minor', 'bad', 'good', 'beware', 'bad_minor', 'good_minor', 'beware_minor'],
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
    },
    isDisabled: {
      control: 'boolean',
    },
  },
};

const Template = (args: ChipProps) => <Chips {...args} />;

export const FilledSmall = Template.bind({});
FilledSmall.args = {
  label: 'Primary Filled Small',
  type: 'filled',
  color: 'primary',
  size: 'small',
  onClose: () => console.log('Chip closed!'),
};
export const OutlineSmall = Template.bind({});
OutlineSmall.args = {
  label: 'Primary Outline Small',
  type: 'outline',
  color: 'primary',
  size: 'small',
  onClose: () => console.log('Chip closed!'),
};


export const FilledLarge = Template.bind({});
FilledLarge.args = {
  label: 'Accent Filled Large',
  type: 'filled',
  color: 'accent',
  size: 'large',
  onClose: () => console.log('Chip closed!'),
};



export const OutlineLarge = Template.bind({});
OutlineLarge.args = {
  label: 'Accent Outline Large',
  type: 'outline',
  color: 'accent',
  size: 'large',
  onClose: () => console.log('Chip closed!'),
};