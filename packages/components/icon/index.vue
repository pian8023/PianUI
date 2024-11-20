<template>
  <i class="p-icon" :class="{ [`p-icon--${type}`]: type }" :style="customStyles" v-bind="$attrs">
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconProps } from './types'
import { omit } from 'lodash-es'
import { computed } from 'vue'

defineOptions({ name: 'p-icon', inheritAttrs: false })

const props = defineProps<IconProps>()
const filterProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>
