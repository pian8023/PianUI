import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PianUI from '@pian-ui/components'
import '@pian-ui/theme-chalk/index.css'

const app = createApp(App)
app.use(router).use(store).use(PianUI).mount('#app')
