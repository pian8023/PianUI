import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
type iconFlip = 'horizontal' | 'vertical' | 'both'
type iconSize =
  | '2xs'
  | 'xs'
  | 'sm'
  | 'lg'
  | 'xl'
  | '2xl'
  | '1x'
  | '2x'
  | '3x'
  | '4x'
  | '5x'
  | '6x'
  | '7x'
  | '8x'
  | '9x'
  | '10x'

type iconType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
type rotation = 90 | 180 | 270 | '90' | '180' | '270'

export interface IconProps {
  border?: boolean
  fixedWidth?: boolean
  flip?: iconFlip
  icon: object | Array<string> | string | IconDefinition
  mask?: object | Array<string> | string
  listItem?: boolean
  pull?: 'right' | 'left'
  pulse?: boolean
  rotation?: rotation
  swapOpacity?: boolean
  size?: iconSize
  spin?: boolean
  transform?: object | string
  symbol?: boolean | string
  title?: string
  inverse?: boolean
  bounce?: boolean
  shake?: boolean
  beat?: boolean
  fade?: boolean
  beatFade?: boolean
  spinPulse?: boolean
  spinReverse?: boolean
  // 自定义
  type?: iconType
  color?: string
}
