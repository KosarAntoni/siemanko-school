module.exports = {
  extends: ['stylelint-config-prettier-scss', 'stylelint-config-rational-order', 'stylelint-config-standard-scss'],
  rules: {
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]+$',
      {
        message: (selector) => `Expected class selector "${selector}" to be lowerCamelCase`,
      },
    ],
  },
};
