import { PropType } from 'vue'

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

export const tooltipProps = {
  content: {
    type: String,
    default: '',
  },
  trigger: {
    type: String as PropType<triggerType>,
    default: 'hover',
  },
  placement: {
    type: String as PropType<placementType>,
    default: 'top',
  },
}
