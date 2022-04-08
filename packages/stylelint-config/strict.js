module.exports = {
  extends: [
    'stylelint-config-standard',
    require.resolve('./rules/prettier'),
    require.resolve('./rules/selector'),
    require.resolve('./rules/order'),
  ],
}
