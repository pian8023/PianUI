<script setup>
import PButton from '@pian-ui/components/button/index.vue'
</script>

<template>
  <div class="disabled block">
    <PButton disabled> hello </PButton>
    <PButton type="primary" disabled> Primary </PButton>
    <PButton type="success" disabled> Success </PButton>
    <PButton type="warning" disabled> Warning </PButton>
    <PButton type="danger" disabled> Danger </PButton>
    <PButton type="info" disabled> Info </PButton>
  </div>

  <div class="disabled-plain block">
    <PButton plain disabled> hello </PButton>
    <PButton type="primary" plain disabled> Primary </PButton>
    <PButton type="success" plain disabled> Success </PButton>
    <PButton type="warning" plain disabled> Warning </PButton>
    <PButton type="danger" plain disabled> Danger </PButton>
    <PButton type="info" plain disabled> Info </PButton>
  </div>
</template>
