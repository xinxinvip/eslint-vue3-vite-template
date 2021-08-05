module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'unit-no-unknown': null, // 禁止未知单位
    'no-descending-specificity': null,
    'selector-type-no-unknown': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: [
          'v-deep'
        ]
      }
    ]
  }
}
