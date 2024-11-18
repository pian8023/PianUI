import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

import { withInstall } from '@/utils/install'
import Icon from './index.vue'
const PIcon = withInstall(Icon)
export default PIcon
