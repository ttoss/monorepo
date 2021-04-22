module.exports = {
  '*.{js,jsx,ts,tsx}': 'tsdx lint --fix',
  '*.{md,mdx,html,json,yml,yaml}': 'prettier --write',
  '*.css': 'stylelint',
  '*.scss': 'stylelint --syntax=scss',
};
