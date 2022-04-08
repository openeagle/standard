// 相关配置 https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/index.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'refactor', 'docs', 'chore', 'style'],
    ],
  },
}
