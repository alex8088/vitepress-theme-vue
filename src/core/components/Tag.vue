<script setup lang="ts">
const props = defineProps<{ title: string }>()
</script>

<template>
  <sup class="tag">{{ props.title }}</sup>
</template>

<style>
.tag {
  display: inline-block;
  border-radius: 6px;
  line-height: 1;
  font-size: 0.6em;
  font-weight: 600;
  position: relative;
  top: -0.65em;
  padding: 0.35em 0.4em 0.25em;
  margin-left: 0.5em;
  color: var(--vt-c-bg);
  transition: color 0.5s;
  background-color: var(--vt-c-brand);
}
</style>
