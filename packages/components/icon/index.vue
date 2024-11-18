<template>
  <font-awesome-icon :icon="icon" :class="className" />
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { iconProps } from './types'

defineOptions({ name: 'p-icon' })

defineProps(iconProps)
</script>
