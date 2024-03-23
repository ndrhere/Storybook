import React from 'react';
import { action } from '@storybook/addon-actions';
import ActionButton from './ActionButton';

export default {
  title: 'Components/ActionButton',
  component: ActionButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
       },
       options: ['Default', 'Neutral', 'Reverse']
    },
    displayType: {
      control: {
        type: 'select',
        },
        options: ['Text only', 'Icon with text', 'Icon only']
    },
    Reverse: {
      control: {
        type: 'select',
        },
      options: ['Default', 'Hover', 'Disabled']
    },
    size: {
      control: {
        type: 'select',
        },
      options: ['Default', 'Small', 'X-Small']
    }
  }
};

const Template = (args) => <ActionButton {...args} onClick={action('Button Clicked')}></ActionButton>;

export const Default = Template.bind({});
Default.args = {
  type: 'Default',
  displayType: 'Text only',
  size: 'Default',
  Reverse: 'Default'
};
