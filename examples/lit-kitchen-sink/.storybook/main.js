module.exports = {
  logLevel: 'debug',
  stories: ['../src/components/**/*.stories.ts'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
  ],
  core: {
    builder: 'webpack5',
  },
};
