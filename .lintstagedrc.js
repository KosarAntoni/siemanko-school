module.exports = {
  '**/*.+(js|jsx|ts|tsx)': ['yarn lint:fix', 'yarn format:fix'],
  '**/*.html': 'yarn format:fix',
  '**/*.+(css|scss)': ['yarn lint:fix-style', 'yarn format:styles'],
};
