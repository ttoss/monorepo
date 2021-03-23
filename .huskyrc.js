module.exports = {
  hooks: {
    'commit-msg':
      'commitlint -E HUSKY_GIT_PARAMS --config commitlint.config.js',
    'pre-commit': 'lint-staged --config lint-staged.config.js',
  },
};