const baseConfig = require('@vue/theme/config')

const navbarFix = function () {
  return {
    name: 'replace-navbar',
    enforce: 'pre',
    transform(code, id) {
      if (id.includes('VPNavBarTitle.vue') && !id.endsWith('.css')) {
        return `
<script setup lang="ts">
import { useData } from 'vitepress'
const { localePath } = useData()
</script>

<template>
  <a class="VPNavBarTitle" :href="localePath">
    <slot name="navbar-title"></slot>
  </a>
</template>

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
}

.VPNavBarTitle:hover {
  opacity: 0.6;
}

.logo {
  position: relative;
}

.logo + .text {
  padding-left: 8px;
}

.text {
  font-size: 16px;
  font-weight: 500;
}
</style>
      `
      }
    }
  }
}

module.exports = async () => {
  let config = await baseConfig()
  config.vite?.optimizeDeps?.exclude?.push('vitepress-theme-vue')
  config.vite.plugins = [navbarFix()]
  if (config.head) {
    config.head = config.head.filter((hd) => hd[0] !== 'link')
  }
  return config
}
