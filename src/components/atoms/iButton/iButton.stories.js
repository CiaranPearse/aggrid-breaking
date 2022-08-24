import { inject } from 'vue';
import IButton from './IButton.vue';
import { Variants, Sizes } from '../../../constants';


export default {
  title: 'Atoms/IButton',
  component: IButton,
  argTypes: {
    buttonText: {
      name: 'buttonText',
      type: { name: 'string', required: false },
      defaultValue: 'Click Me',
      description: 'Text within the button.',
    },
    buttonIcon: 'mdi-profile',
    onClick: {},
    size: {
      control: { type: 'select' },
      options: Sizes,
    },
    variant: {
      control: { type: 'select' },
      options: Variants,
    },
    size: {
      control: { type: 'select' },
      options: Sizes,
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'info', 'success', 'error', 'warning'],
    },
    intent: {
      control: { type: 'select' },
      options: ['link', 'func'],
    },
    identifier: {
      name: 'identifier',
      type: { name: 'string', required: false },
      defaultValue: 'UniqueIdentifier',
      description: 'This is used to reference a event in your page. It should be camelCase and match the function the event will emit to.',
    },
    action: 'https://www.google.com',
    disabled: 'false'
  },
};

const Template = (args) => ({
  components: { IButton },
  setup() {
    return { args };
  },
  template: '<i-button v-bind="args" />',
});

export const LinkButton = Template.bind({});
LinkButton.args = {
  buttonText: 'Button',
  variant: 'elevated',
  size: Sizes.Default,
  color: 'primary',
  disabled: false,
  intent: 'link',
  identifier: 'Some unique identifier',
  action: 'https://www.google.com'
};

export const ActionButton = Template.bind({});
ActionButton.args = {
  buttonText: 'Button',
  variant: 'elevated',
  size: Sizes.Default,
  color: 'primary',
  disabled: false,
  intent: 'func',
  identifier: 'Some unique identifier',
};

export const IconButton = Template.bind({});
IconButton.args = {
  buttonText: null,
  buttonIcon: 'mdi-home-outline',
  variant: 'elevated',
  size: Sizes.Default,
  color: 'primary',
  disabled: false,
  intent: 'link',
  identifier: 'Some unique identifier',
  action: 'https://www.google.com'
};
