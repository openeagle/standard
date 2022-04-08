module.exports = {
  extends: [
    'plugin:vue/essential',
    '@openeagle/eslint-config-base/typescript',
    require.resolve('./rules/import.js'),
    require.resolve('./rules/typescript.js'),
  ],
  parser: require.resolve('vue-eslint-parser'),
}
