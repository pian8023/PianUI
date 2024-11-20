<script setup>
import { ref } from 'vue'
import PCollapse from '@pian-ui/components/collapse/index.vue'
import PCollapseItem from '@pian-ui/components/collapse/item.vue'
const openedValue = ref(['a'])
</script>

<template>
  <div class="basic block">
    <PCollapse v-model="openedValue">
      <PCollapseItem name="a" title="Title A">
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </PCollapseItem>
      <PCollapseItem name="b" title="Title B">
        <div>this is bbbbb test</div>
      </PCollapseItem>
      <PCollapseItem name="c" title="Disabled Title" disabled>
        <div>this is cccc test</div>
      </PCollapseItem>
    </PCollapse>
  </div>
</template>
