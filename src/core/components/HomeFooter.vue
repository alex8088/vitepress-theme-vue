<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <footer v-if="frontmatter.footer" class="footer">
    <p class="copyright">{{ frontmatter.footer }}</p>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--vt-c-bg-soft);
  padding: 24px 12px;
  background-color: var(--vt-c-bg-soft);
  transition: border-top 0.5s, background-color 0.5s;
}

.copyright {
  text-align: center;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vt-c-text-2);
  transition: color 0.25s;
}
</style>
