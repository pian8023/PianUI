<template>
  <PSelect v-model="selectTest" :options="selectOptions" clearable placeholder="请选择"></PSelect>
  <hr />
  <PSelect
    filterable
    v-model="selectTest"
    :options="selectOptions"
    clearable
    placeholder="请选择"
    :render-label="customRender"></PSelect>
  {{ selectTest }}
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
const selectOptions = [
  { label: 'hello', value: '1' },
  { label: 'xyz', value: '2' },
  { label: 'testing', value: '3' },
  { label: 'check', value: '4', disabled: true },
]
const selectTest = ref('0')

const customRender = (option: any) => {
  return h('div', { className: 'xyz' }, [h('b', option.label), h('span', option.value)])
}
</script>

<style scoped></style>
