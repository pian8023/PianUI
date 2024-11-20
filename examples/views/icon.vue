<template>
  <h3 class="title" @click="openFontAwesome">Font Awesome Icon</h3>

  <PIcon :icon="['fas', 'user']" border /> <br />

  <PIcon icon="user" type="warning" size="10x" /> <br />
  <PIcon icon="user" type="success" size="2xl" rotation="90" /> <br />
  <PIcon icon="arrow-up" type="success" size="2xl" rotation="90" /> <br />
  <PIcon icon="arrow-down" type="primary" size="2xl" /> <br />
  <PIcon icon="arrow-left" type="danger" size="2xl" /> <br />
  <PIcon icon="arrow-right" type="info" size="2xl" color="#1e80ff" /> <br />
</template>

<script setup lang="ts">
const openFontAwesome = () => {
  window.open('https://fontawesome.com/', '_blank')
}
</script>

<style lang="less" scoped>
.title {
  cursor: pointer;
  &:hover {
    color: #1e80ff;
  }
}
</style>
