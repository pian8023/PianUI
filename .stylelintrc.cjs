module.exports = {
  root: true,
  defaultSeverity: 'error',
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-less', 'stylelint-config-standard-vue'],
  plugins: ['stylelint-order', 'stylelint-less'],
  // 不同格式的文件指定自定义语法
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
      customSyntax: 'postcss-html',
      rules: {
        // 禁止未知的伪类选择器
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep', 'global'] }],
        // 禁止未知的伪元素选择器
        'selector-pseudo-element-no-unknown': [
          true,
          { ignorePseudoElements: ['v-deep', '::v-deep', 'v-global', 'v-slotted'] },
        ],
      },
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      rules: {
        'less/color-no-invalid-hex': true,
        'less/no-duplicate-variables': true,
      },
    },
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json', '**/*.md', '**/*.yaml'],
  rules: {
    'string-quotes': 'single',
    // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'no-descending-specificity': null,
    // 禁止空源码
    'no-empty-source': null,
    // 禁止字体族中缺少泛型族关键字
    'font-family-no-missing-generic-family-keyword': null,
    // 一些特殊的scss指令
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
        ],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
    // 不允许未知函数
    'function-no-unknown': null,
    // 不允许未知单位
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    // 标记 CSS 规范中未知属性值
    'declaration-property-value-no-unknown': true,
    // 不允许选择器使用供应商前缀
    'selector-no-vendor-prefix': null,
    // 指定关键帧名称的模式
    'keyframes-name-pattern': null,
    // 指定类选择器的模式
    'selector-class-pattern': null,
    // 不允许值使用供应商前缀
    'value-no-vendor-prefix': null,
    // 禁用每个选择器之前插入空行
    'rule-empty-line-before': null,
    // 禁止小于 1 的小数有一个前导零
    'number-leading-zero': 'never',
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else', 'else-if'],
      },
    ],
    // 指定样式的排序
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'flex-shrink',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'font-size',
      'font-family',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition',
      'content',
    ],
  },
}
