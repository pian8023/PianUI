<script setup>
import PButton from '@pian-ui/components/button/index.vue'
import PIcon from '@pian-ui/components/icon/index.vue'
</script>

<template>
  <div class="basic block">
    <PButton> hello </PButton>
    <PButton type="primary"> Primary </PButton>
    <PButton type="success"> Success </PButton>
    <PButton type="warning"> Warning </PButton>
    <PButton type="danger"> Danger </PButton>
    <PButton type="info"> Info </PButton>
  </div>

  <div class="plain block">
    <PButton plain> hello </PButton>
    <PButton type="primary" plain> Primary </PButton>
    <PButton type="success" plain> Success </PButton>
    <PButton type="warning" plain> Warning </PButton>
    <PButton type="danger" plain> Danger </PButton>
    <PButton type="info" plain> Info </PButton>
  </div>

  <div class="round block">
    <PButton round> hello </PButton>
    <PButton type="primary" round> Primary </PButton>
    <PButton type="success" round> Success </PButton>
    <PButton type="warning" round> Warning </PButton>
    <PButton type="danger" round> Danger </PButton>
    <PButton type="info" round> Info </PButton>
  </div>

  <div class="circle block">
    <PButton circle> <PIcon icon="star" /> </PButton>
    <PButton type="primary" circle> <PIcon icon="star" /> </PButton>
    <PButton type="success" circle> <PIcon icon="star" /> </PButton>
    <PButton type="warning" circle> <PIcon icon="star" /> </PButton>
    <PButton type="danger" circle> <PIcon icon="star" /> </PButton>
    <PButton type="info" circle> <PIcon icon="star" /> </PButton>
  </div>
</template>
<style>
.block {
  margin-bottom: 10px;
}
</style>
