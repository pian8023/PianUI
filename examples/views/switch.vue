<template>
  <p-switch v-model="switchValue" active-value="ture" inactive-value="false"></p-switch>
  <span>{{ switchValue }}</span>
  <hr />
  <p-switch v-model="switchValue" size="large" active-text="on" inactive-text="off"> </p-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const switchValue = ref(false)
</script>

<style scoped></style>
