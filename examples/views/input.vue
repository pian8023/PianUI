<template>
  <h3>input</h3>
  <div style="width: 200px">
    <PInput type="password" show-password v-model="inputModel" />
    <PInput type="text" clearable v-model="inputModel" placeholder="输入字符以后可以点击清空" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const inputModel = ref('')
</script>

<style lang="scss" scoped></style>
