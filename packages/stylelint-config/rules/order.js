module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    // 指定声明块内的内容顺序
    'order/order': ['custom-properties', 'declarations'],
    // 指定声明块中的属性顺序。
    'order/properties-order': [
      [
        {
          emptyLineBefore: 'never',
          properties: ['display'],
        },
        {
          emptyLineBefore: 'never',
          properties: ['width', 'height'],
        },
        {
          emptyLineBefore: 'never',
          properties: ['color'],
        },
        {
          emptyLineBefore: 'never',
          properties: ['border'],
        },
        {
          emptyLineBefore: 'never',
          properties: ['transform'],
        },
      ],
      {
        unspecified: 'bottom',
        emptyLineBeforeUnspecified: 'threshold',
        emptyLineMinimumPropertyThreshold: 4,
      },
    ],
  },
}
