import { Sizes } from "../../../../constants";

export const BtnFixture1 = {
  buttonText: 'Button',
  variant: 'elevated',
  size: Sizes.Default,
  color: 'primary',
  disabled: false,
  intent: 'link',
  identifier: 'Some unique identifier',
  action: 'https://www.google.com'
}

export const BtnFixture2 = {
  buttonText: 'Button',
  variant: 'elevated',
  size: Sizes.Default,
  color: 'primary',
  disabled: false,
  intent: 'func',
  identifier: 'Some unique identifier',
}

export const BtnFixture3 = {
  buttonText: null,
  buttonIcon: 'mdi-home-outline',
  variant: 'elevated',
  size: Sizes.Default,
  color: 'primary',
  disabled: false,
  intent: 'link',
  identifier: 'Some unique identifier',
  action: 'https://www.google.com'
}