module.exports = {
  arrowParens: 'always',
  printWidth: 80,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      options: {
        /**
         * This size because some CloudFormation resource name may have a
         * a big name.
         */
        printWidth: 200,
      },
    },
  ],
};