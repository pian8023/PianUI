import type { Placement, Options } from '@popperjs/core'

export type triggerType = 'hover' | 'click'
export type placementType =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom'

export interface TooltipProps {
  // 显示内容
  content?: string
  // 触发方式
  trigger?: 'hover' | 'click'
  // 显示位置
  placement?: Placement
  // 手动控制
  manual?: boolean
  // 丰富popper配置项
  popperOptions?: Partial<Options>
  // 设置动画
  transition?: string
  // 打开和延迟时间
  openDelay?: number
  closeDelay?: number
}

// 改变状态发出事件
export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void
  // 点击空白处隐藏
  (e: 'click-outside', value: boolean): void
}

// 使用户可以手动打开或关闭弹框
export interface TooltipInstance {
  show: () => void
  hide: () => void
}
