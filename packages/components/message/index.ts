import Message from './index.vue'
import { withInstall } from '@/utils/install'
import { $PMessage, closeAll } from './create'

const PMessage = withInstall(Message)

export default PMessage

export { $PMessage, closeAll }
