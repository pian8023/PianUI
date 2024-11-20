<template>
  <PButton @click="createMessage">createMessage</PButton>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { $PMessage } from '@pian-ui/components/message/create'

onMounted(() => {
  setTimeout(() => {
    intance.destroy()
  }, 2000)
  $PMessage({
    type: 'info',
    message: 'createMessage1',
    duration: 0,
    showClose: true,
  })
  $PMessage({
    type: 'danger',
    message: 'createMessage2',
    duration: 2000,
    showClose: true,
  })
  $PMessage({
    type: 'warning',
    message: 'createMessage2',
    duration: 2000,
    showClose: true,
  })
  const intance = $PMessage({
    type: 'success',
    message: 'createMessage3',
    duration: 0,
    showClose: true,
  })
})

const createMessage = () => {
  $PMessage({
    type: 'info',
    message: 'createMessage',
    duration: 0,
    showClose: true,
  })
}
</script>

<style scoped></style>
