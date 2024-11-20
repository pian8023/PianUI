<template>
  <div>
    <h3>Button</h3>
    <div>
      <p-button>default</p-button>
      <p-button type="primary">primary</p-button>
      <p-button type="success">success</p-button>
      <p-button type="info">info</p-button>
      <p-button type="warning">warning</p-button>
      <p-button type="danger">danger</p-button>
    </div>

    <h3>Button size</h3>
    <div style="margin-bottom: 10px">
      <p-button type="primary" size="small">small</p-button>
      <p-button type="primary" plain>default</p-button>
      <p-button type="primary" size="large">large</p-button>
    </div>
    <div></div>
    <h3>Button round</h3>
    <div style="margin-bottom: 10px">
      <p-button round>round</p-button>
      <p-button type="primary" circle>primary</p-button>
    </div>

    <h3>Button disabled</h3>
    <div>
      <p-button type="primary" disabled>primary</p-button>
    </div>

    <h3>Button icon</h3>

    <div>
      <p-button type="primary" :icon="['fas', 'user']">primary</p-button>
      <p-button icon="heart"></p-button>
      <p-button icon="star"></p-button>
    </div>

    <h3>Button loading</h3>

    <div>
      <p-button type="primary" icon="loading" loading>加载中</p-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
