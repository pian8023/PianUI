import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name
    app.component(name, comp as SFCWithInstall<T>)
  }
  return comp as SFCWithInstall<T>
}

// import { App } from "vue"
// import { Vue3UIOption, installComponent } from "@pc-vue3-ui/utils"
// import { components } from "./components"

// const Vue3UI = {
//   install(app: App, options?: Vue3UIOption) {
//     components.forEach(component => {
//       installComponent(app, component, options)
//     })
//   }
// }

// export default Vue3UI
