# 安装

```bash
npm i PianUI --save
```

## 使用文档

## 开始使用

**全局使用**

```js
// 引入所有组件
import PianUI from 'PianUI'
// 引入样式
import 'yv-element/dist/index.css'

import App from './App.vue'
// 全局使用
createApp(App).use(YvElement).mount('#app')
```

```vue
<template>
  <yv-button>我是 Yv Button</yv-button>
</template>
```

**单个导入**

Yv Element 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

```vue
<template>
  <Button>我是 Yv Button</Button>
</template>
<script>
import { Button } from 'yv-element'
import 'yv-element/dist/index.css'
export default {
  components: { Button },
}
</script>
```

# 快速开始

#### 安装组件库

```bash
npm install pf-component-library
```

#### 引用组件库

> 在 main.js 中引用组件库

```js
// 全部引入
import 'pf-component-library/dist/index_style.css'
import PUI from 'pf-component-library'
app.use(PUI)

// 按需引入
import 'pf-component-library/dist/demo_style.css'
import { Demo } from 'pf-component-library'
app.use(Demo)
```
