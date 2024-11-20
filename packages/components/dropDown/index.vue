<script setup lang="ts">
import { ref } from 'vue'
import RenderVnode from '../message/RenderVnode'

import type { DropdownProps, DropdownEmits, MenuOption, DropdownInstance } from './types'
import type { TooltipInstance } from '../tooltip/types'
defineOptions({
  name: 'PDropdown',
})

const tooltipRef = ref<TooltipInstance | null>(null)
const props = withDefaults(defineProps<DropdownProps>(), {
  afterClickItem: true,
})
const emits = defineEmits<DropdownEmits>()
const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}
const itemClick = (e: MenuOption) => {
  if (e.disabled) {
    return
  }
  emits('select', e)
  if (props.afterClickItem) {
    tooltipRef.value?.hide()
  }
}

defineExpose<DropdownInstance>({
  // 通过闭包的形式，直接赋值会拿收不到对应的节点,因为是在setup函数中，此时实例还未被挂载
  show: () => tooltipRef.value?.show(),
  hide: () => tooltipRef.value?.hide(),
})
</script>

<template>
  <div class="p-dropdown">
    <PTooltip
      :trigger="trigger"
      :placement="placement"
      :popper-options="popperOptions"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :manual="manual"
      @visible-change="visibleChange"
      ref="tooltipRef">
      <slot></slot>
      <template #content>
        <ul class="p-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <!-- 分割线 -->
            <hr v-if="item.divided" role="separator" class="divided-placeholder" />

            <li
              class="p-dropdown__item"
              @click="itemClick(item)"
              :class="{ 'is-disabled': item.disabled, 'is-divided': item.divided }"
              :id="`dropdown-item-${item.key}`">
              <!-- 中介组件 -->
              <RenderVnode :v-node="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </PTooltip>
  </div>
</template>
