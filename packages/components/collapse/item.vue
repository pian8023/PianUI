<script setup lang="ts">
import { inject, computed } from 'vue'
import { collapseContextKey } from './types'
import type { CollapseItemProps } from './types'

defineOptions({
  name: 'PCollapseItem',
})
const props = defineProps<CollapseItemProps>()
// 接受祖先组件传递过来的参数
const collapseContext = inject(collapseContextKey, undefined)
// 根据是否被添加到数据进行显示/隐藏处理
const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))

const handleClick = () => {
  if (props.disabled) {
    return
  }
  collapseContext?.handleItemClick(props.name)
  // console.log(isActive.value)
}
// 过渡动画事件处理
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
}
</script>

<template>
  <div
    class="p-collapse-item"
    :class="{
      'is-disabled': props.disabled,
    }">
    <div
      class="p-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      :id="`item-header-${props.name}`"
      @click="handleClick">
      <slot name="title">{{ title }}</slot>
      <PIcon icon="angle-right" class="header-angle"></PIcon>
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div class="p-collapse-item__wrapper" v-show="isActive">
        <div class="p-collapse-item__content" :id="`item-content-${props.name}`">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>
