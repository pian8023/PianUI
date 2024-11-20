import Collapse from './index.vue'
import CollapseItem from './item.vue'
import { withInstall } from '@/utils/install'

const PCollapse = withInstall(Collapse)
const PCollapseItem = withInstall(CollapseItem)

export { PCollapse, PCollapseItem }
