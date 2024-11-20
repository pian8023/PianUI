<template>
  <PCollapse v-model="openValue" accordion>
    <PCollapseItem name="a" title="Title A">
      <!-- <template #title>
            title A slot
          </template> -->
      <h1>headline title</h1>
      <div>this is content</div>
    </PCollapseItem>

    <PCollapseItem name="b" title="Title B">
      <div>this is content b</div>
    </PCollapseItem>

    <PCollapseItem name="c" title="Disabled Title" disabled>
      <div>this is content c</div>
    </PCollapseItem>
  </PCollapse>
  {{ openValue }}
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const openValue = ref(['a'])

onMounted(() => {
  setTimeout(() => {
    openValue.value.push('b')
  }, 2000)
})
</script>

<style scoped></style>
