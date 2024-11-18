import { App } from 'vue'
import * as components from './components'

export default {
  install(app: App) {
    Object.entries(components).forEach(([key, value]) => {
      app.component(key, value)
    })
  },
}
