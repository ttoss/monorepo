module.exports = {
  '*.{js,jsx,ts,tsx}': 'eslint --fix',
  '*.{md,mdx,html,json,yml,yaml}': 'prettier --write',
  '*.css': 'stylelint',
  '*.scss': 'stylelint --syntax=scss',
};
