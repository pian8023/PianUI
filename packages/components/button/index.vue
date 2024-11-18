<template>
  <button
    class="p-button"
    :class="[
      size && `p-button--${size}`,
      `p-button__${type}`,
      { 'p-button--icon': icon },
      { 'is-plain': plain },
      { 'is-disabled': disabled || loading },
      { 'is-round': round },
    ]"
    :disabled="disabled || loading">
    <div class="p-button__inner">
      <p-icon v-if="loading" :icon="['fas', 'fa-spinner']"></p-icon>

      <p-icon v-if="icon" :icon="icon"></p-icon>
      <span v-if="$slots.default">
        <slot />
      </span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { buttonProps } from './types'

defineOptions({
  name: 'p-button',
})

defineProps(buttonProps)
</script>
