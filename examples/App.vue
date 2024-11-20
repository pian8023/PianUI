<template>
  <div class="ui-app">
    <div class="side">
      <header class="title">PianUI</header>
      <ol class="menus">
        <li v-for="(item, index) in componentsList" :key="index" class="menu">
          <router-link :to="item.path" class="nav-link">
            {{ item.text }}
          </router-link>
        </li>
      </ol>
    </div>

    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const componentsList = ref([
  {
    path: '/icon',
    text: '图标',
  },
  {
    path: '/button',
    text: '按钮',
  },
  {
    path: '/input',
    text: '输入框',
  },
  {
    path: '/select',
    text: '选择器',
  },
  {
    path: '/datePicker',
    text: '日期选择框',
  },
  {
    path: '/message',
    text: '全局提示',
  },
  {
    path: '/tooltip',
    text: '文字提示',
  },
  {
    path: '/modal',
    text: '对话框',
  },
  {
    path: '/collapse',
    text: '折叠面板',
  },
  {
    path: '/tree',
    text: '树形控件',
  },
  {
    path: '/scrollTable',
    text: '虚拟滚动列表',
  },
  {
    path: '/switch',
    text: '开关',
  },
  {
    path: '/dropdown',
    text: '下拉菜单',
  },
  {
    path: '/form',
    text: '表单',
  },
])
</script>

<style lang="less" scoped>
.ui-app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;

  .side {
    width: 220px;
    margin-right: 12px;
    height: 100%;
    border-right: 2px solid #f2f6fc;

    .title {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #303133;
      font-size: 30px;
      font-weight: 800;
      font-family: Inter, sans-serif;
    }

    .menus {
      width: 100%;
      height: calc(100% - 50px);
      overflow: auto;
      margin: 0;

      .menu {
        margin: 8px 0;
        color: #606266;
        a {
          text-decoration: none;
        }
      }
    }
  }

  .content {
    height: 100%;
    width: calc(100% - 234px);
  }
}
</style>
