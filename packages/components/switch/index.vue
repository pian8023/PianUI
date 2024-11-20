<script setup lang="ts">
import type { SwitchProps, SwitchEmits } from './types'
import { ref, computed, onMounted, watch } from 'vue'
defineOptions({
  name: 'p-switch',
})
const props = withDefaults(defineProps<SwitchProps>(), {
  activeValue: true,
  inactiveValue: false,
})
const emits = defineEmits<SwitchEmits>()
const inputRef = ref<HTMLInputElement>()
const innerValue = ref(props.modelValue)
// 是否被选中
const checked = computed(() => innerValue.value === props.activeValue)
const switchValue = () => {
  if (props.disabled) return
  const newValue = checked.value ? props.inactiveValue : props.activeValue
  innerValue.value = newValue
  emits('update:modelValue', newValue)
  emits('change', newValue)
}

onMounted(() => {
  inputRef.value!.checked = checked.value
})

watch(checked, (newVal) => {
  inputRef.value!.checked = newVal
})
watch(
  () => props.modelValue,
  (newVal) => {
    innerValue.value = newVal
  }
)
</script>

<template>
  <div
    class="p-switch"
    :class="{
      [`p-switch--${size}`]: size,
      'is-disabled': disabled,
      'is-checked': checked,
    }"
    @click="switchValue">
    <input
      ref="inputRef"
      class="p-switch__input"
      type="checkbox"
      role="switch"
      :name="name"
      :disabled="disabled"
      @keydown.enter="switchValue" />

    <div class="p-switch__core">
      <div class="p-switch__core-inner">
        <span class="p-switch__core-inner-text" v-if="activeText || inactiveText">
          {{ checked ? activeText : inactiveText }}
        </span>
      </div>
      <div class="p-switch__core-action"></div>
    </div>
  </div>
</template>
