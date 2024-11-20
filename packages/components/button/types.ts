export type buttonType = 'primary' | 'success' | 'info' | 'warning' | 'danger'
export type buttonSize = 'small' | 'large'
export type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  // 类型
  type?: buttonType
  // 尺寸
  size?: buttonSize
  // 是否为朴素按钮
  plain?: boolean
  // 圆角
  round?: boolean
  circle?: boolean
  // 是否禁用
  disabled?: boolean
  // 图标
  icon?: string
  // 加载
  loading?: boolean
  nativeType?: NativeType
  autofocus?: boolean
}

export interface ButtonInstance {
  ref: HTMLButtonElement
}
