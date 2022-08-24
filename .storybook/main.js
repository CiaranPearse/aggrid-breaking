const path = require('path')
const vuetify = require('vite-plugin-vuetify');

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "storybook-addon-vuetify3", "@storybook/preset-scss"],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config, { configType }) {

    config.resolve.alias['~storybook'] = path.resolve(__dirname)
    config.resolve.alias['@atoms'] = path.resolve(__dirname, '../src/components/atoms')
    config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src')
    
    config.css = {
      preprocessorOptions: {
        scss: { additionalData: `@import "src/styles/application.scss";` },
      },
    };

    config.plugins = [
      ...config.plugins,
      vuetify(),
    ];

    return config;
  }
};