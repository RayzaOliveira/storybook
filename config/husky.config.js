module.exports = {
  hooks: {
    'commit-msg': 'commitlint  --config config/commitlint.config.js',
    'pre-commit': 'lint-staged --config config/lint-staged.config.js',
  },
};
