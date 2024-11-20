<template>
  <p-dropDown
    :menu-options="optionsDrown"
    placement="bottom"
    trigger="click"
    @select="handleClickDrop"
    @visible-change="handleClickVisible"
    ref="DropdownRef">
    Tooltip
  </p-dropDown>
</template>

<script setup lang="ts">
import { h } from 'vue'
import type { MenuOption } from '@pian-ui/components/dropdown/types'

const optionsDrown: MenuOption[] = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' },
]
const handleClickDrop = (e: any) => {
  console.log('handleClickDrop=>', e)
}
const handleClickVisible = (e: any) => {
  console.log('handleClickVisible=>', e)
}
</script>

<style scoped></style>
