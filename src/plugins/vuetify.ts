import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export const defaultLight = {
  dark: false,
  colors: {
    background: 'light-blue',
    layoutBackground: '#0071c5',
    surface: '#FFFFFF',
    primary: '#0071c5',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};
export const darkOne = {
  dark: true,
  colors: {
    background: '#FFFFFF',
    layoutBackground: '#98c3e3',
    surface: '#FFFFFF',
    primary: '#0071c5',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'defaultLight',
    themes: {
      defaultLight,
      darkOne,
    },
  },
});
