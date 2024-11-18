import { ExtractPropTypes, PropType } from 'vue'
export type buttonType = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'

export type buttonSize = 'small' | 'default' | 'large'

export const buttonProps = {
  // 类型
  type: {
    type: String as PropType<buttonType>,
    default: 'default',
  },
  // 尺寸
  size: {
    type: String as PropType<buttonSize>,
    default: 'default',
  },
  // 是否为朴素按钮
  plain: {
    type: Boolean,
    default: false,
  },
  // 圆角
  round: {
    type: Boolean,
    default: false,
  },
  // 图标
  icon: {
    type: String,
    default: '',
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false,
  },
  // 加载
  loading: {
    type: Boolean,
    default: false,
  },
  // 自定义元素标签
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'button',
  },
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
