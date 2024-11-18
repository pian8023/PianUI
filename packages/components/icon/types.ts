import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { PropType } from 'vue'
export type iconFlip = 'horizontal' | 'vertical' | 'both'
export type iconSize = 'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'

export const iconProps = {
  icon: {
    type: Object as PropType<IconDefinition>,
    default: [],
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
  spin: {
    type: Boolean,
    default: false,
  },
  pulse: {
    type: Boolean,
    default: false,
  },
  fixedWidth: {
    type: Boolean,
    default: false,
  },
  flip: {
    type: String as PropType<iconFlip>,
    default: '',
  },
  rotation: {
    type: Number,
    default: 0,
  },
  border: {
    type: Boolean,
    default: false,
  },
  pull: {
    type: String as PropType<'left' | 'right'>,
    default: '',
  },
  mask: {
    type: Array as unknown as PropType<[string, string]>,
    default: () => [],
  },
  transform: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<iconSize>,
    default: '',
  },
}
