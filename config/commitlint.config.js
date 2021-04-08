module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': () => {
      const headerMaxLength = 80;
      return [2, 'always', headerMaxLength];
    },
  },
};
