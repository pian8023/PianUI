import Form from './index.vue'
import FormItem from './item.vue'
import { withInstall } from '@/utils/install'

const PForm = withInstall(Form)
const PFormItem = withInstall(FormItem)

export { PForm, PFormItem }
