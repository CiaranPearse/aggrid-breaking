import { withVuetify } from 'storybook-addon-vuetify3/dist/decorators'
import { defaultLight, darkOne } from "../src/plugins/vuetify";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  vuetify: {
    theme: {
      defaultTheme: 'defaultLight',
      themes: {
        defaultLight,
        darkOne,
      }
    }
  }
}

export const decorators = [
  withVuetify,
]