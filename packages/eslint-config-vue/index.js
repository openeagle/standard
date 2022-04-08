module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    '@openeagle/eslint-config-base',
    require.resolve('./rules/import.js'),
  ],
  parser: require.resolve('vue-eslint-parser'),
}
