<template>
  <button
    class="p-button"
    ref="_ref"
    :class="{
      [`p-button--${type}`]: type,
      [`p-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType">
    <p-icon v-if="loading" icon="spinner" spin></p-icon>
    <p-icon v-if="icon" :icon="icon"></p-icon>

    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'
defineOptions({
  name: 'p-button',
})
withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
})
const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref,
})
</script>
