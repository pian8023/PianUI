<template>
  <div
    class="tooltip-container"
    :class="{ 'tooltip-click': trigger === 'click' }"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
    @click="handleClick">
    <slot></slot>
    <div v-if="isTooltipVisible" :class="tooltipClass">
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const positionOptions = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'right',
] as const
type Position = (typeof positionOptions)[number]
type Trigger = ['hover' | 'click'][number]
const defaultTrigger: Trigger = 'hover'

const props = defineProps<{
  content: string
  position?: Position
  trigger?: Trigger
}>()

const trigger = props.trigger ?? defaultTrigger

const isTooltipVisible = ref(false)

const showTooltip = () => {
  isTooltipVisible.value = true
}

const hideTooltip = () => {
  isTooltipVisible.value = false
}

const handleMouseOver = () => {
  if (trigger === 'hover') {
    showTooltip()
  }
}

const handleMouseOut = () => {
  if (trigger === 'hover') {
    hideTooltip()
  }
}

const handleClick = () => {
  if (trigger === 'click') {
    isTooltipVisible.value = !isTooltipVisible.value
  }
}

watch(
  () => props.trigger,
  (newTrigger) => {
    if (newTrigger === 'click' && isTooltipVisible.value) {
      hideTooltip()
    }
  },
  { immediate: true }
)

const tooltipClass = computed(() => {
  return `tooltip-content ${props.position} ${isTooltipVisible.value ? 'active' : ''}`
})
</script>

<style scoped lang="less">
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip-content {
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  font-size: 12px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s linear 0.3s,
    opacity 0.3s linear;
}

.tooltip-content.active {
  visibility: visible;
  opacity: 1;
  transition-delay: 0s;
}

.tooltip-content.top {
  bottom: calc(100% + 3px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-content.top-start {
  bottom: calc(100% + 3px);
  left: 0;
  transform: translateX(0%);
  border-radius: 3px 3px 3px 0;
}

.tooltip-content.top-end {
  bottom: calc(100% + 3px);
  right: 0;
  transform: translateX(0);
  border-radius: 3px 3px 0;
}

.tooltip-content.bottom {
  top: calc(100% + 3px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-content.bottom-start {
  top: calc(100% + 3px);
  left: 0;
  transform: translateX(0%);
  border-radius: 0 3px 3px;
}

.tooltip-content.bottom-end {
  top: calc(100% + 3px);
  right: 0;
  transform: translateX(0%);
  border-radius: 3px 0 3px 3px;
}

.tooltip-content.left {
  top: 50%;
  right: calc(100% + 6px);
  transform: translateY(-50%);
}

.tooltip-content.right {
  top: 50%;
  left: calc(100% + 6px);
  transform: translateY(-50%);
}

.tooltip-content::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.tooltip-content.top::before {
  bottom: -6px;
  left: 50%;
  border-width: 6px 6px 0;
  border-color: #333 transparent transparent transparent;
  transform: translateX(-50%);
}

.tooltip-content.bottom::before {
  top: -6px;
  left: 50%;
  border-width: 0 6px 6px;
  border-color: transparent transparent #333 transparent;
  transform: translateX(-50%);
}

.tooltip-content.left::before {
  top: 50%;
  right: -6px;
  border-width: 6px 0 6px 6px;
  border-color: transparent transparent transparent #333;
  transform: translateY(-50%);
}

.tooltip-content.right::before {
  top: 50%;
  left: -6px;
  border-width: 6px 6px 6px 0;
  border-color: transparent #333 transparent transparent;
  transform: translateY(-50%);
}

.tooltip-content.top-start::before {
  bottom: -6px;
  left: 0;
  border-width: 6px 6px 0;
  border-color: #333 transparent transparent transparent;
}

.tooltip-content.top-end::before {
  bottom: -6px;
  right: 0;
  border-width: 6px 6px 0;
  border-color: #333 transparent transparent transparent;
}

.tooltip-content.bottom-start::before {
  top: -6px;
  left: 0;
  border-width: 0 6px 6px;
  border-color: transparent transparent #333 transparent;
}

.tooltip-content.bottom-end::before {
  top: -6px;
  right: 0;
  border-width: 0 6px 6px;
  border-color: transparent transparent #333 transparent;
}

.tooltip-content.left-start::before {
  top: 6px;
  right: -6px;
  border-width: 6px 6px 6px 0;
  border-color: transparent #333 transparent transparent;
}

.tooltip-content.left-end::before {
  bottom: 6px;
  right: -6px;
  border-width: 6px 6px 6px 0;
  border-color: transparent #333 transparent transparent;
}

.tooltip-content.right-start::before {
  top: 6px;
  left: -6px;
  border-width: 6px 0 6px 6px;
  border-color: transparent transparent transparent #333;
}

.tooltip-content.right-end::before {
  bottom: 6px;
  left: -6px;
  border-width: 6px 0 6px 6px;
  border-color: transparent transparent transparent #333;
}
</style>
