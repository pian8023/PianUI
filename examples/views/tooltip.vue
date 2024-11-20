<template>
  <h1>hover或click处理</h1>
  <PTooltip
    ref="toolTipRef"
    content="Tooltip"
    placement="right"
    :trigger="trigger"
    :open-delay="1000"
    :close-delay="1000">
    Tooltip
  </PTooltip>
  <hr />
  <h1>手动处理</h1>
  <PTooltip ref="toolTipRef" content="Tooltip" placement="top" :trigger="trigger" manual :popper-options="options">
    Tooltip
  </PTooltip>
  <hr />
  <PButton size="small" @click="handleClickOpen()">open Tooltip</PButton>
  <PButton size="small" @click="handleClickClose()">close Tooltip</PButton>
</template>

<script setup lang="ts">
import type { Options } from '@popperjs/core'
import type { TooltipInstance } from '@pian-ui/components/tooltip/types'
import { ref } from 'vue'
const options: Partial<Options> = { placement: 'top', strategy: 'fixed' }
const toolTipRef = ref<TooltipInstance | null>(null)
const DropdownRef = ref<TooltipInstance | null>(null)
const handleClickOpen = () => {
  toolTipRef.value?.show()
  DropdownRef.value?.show()
}
const handleClickClose = () => {
  toolTipRef.value?.hide()
  DropdownRef.value?.hide()
}
</script>

<style scoped></style>
