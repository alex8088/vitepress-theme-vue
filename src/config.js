const baseConfig = require('@vue/theme/config')

const bugFix = function () {
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
      if (id.includes('VPSidebarLink.vue') && !id.endsWith('.css')) {
        return `
<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { inject } from 'vue'
import { MenuItemWithLink } from '../../core'
import { isActive } from '../support/utils'

const props = defineProps<{
  item: MenuItemWithLink
}>()

const { page, site } = useData()
const closeSideBar = inject('close-sidebar') as () => void
const _isActive = () => {
  let currentPath = page.value.relativePath
  if (site.value.base !== '/') {
    currentPath = withBase(page.value.relativePath).substring(1)
  }
  return isActive(currentPath, props.item.link)
}
console.log(withBase(page.value.relativePath).substring(1), props.item.link)
</script>

<template>
  <a
    :class="{ link: true, active: _isActive() }"
    :href="item.link"
    @click="closeSideBar"
  >
    <p class="link-text">{{ item.text }}</p>
  </a>
</template>

<style scoped>
.link {
  display: block;
  padding: 6px 0;
}

@media (min-width: 960px) {
  .link {
    padding: 4px 0;
  }
}

.link:hover .link-text {
  color: var(--vt-c-brand-text-1);
  transition: color 0.25s;
}

.link.active .link-text {
  font-weight: 600;
  color: var(--vt-c-brand);
  transition: color 0.25s;
}

.link-text {
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
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
  config.vite.plugins = [bugFix()]
  if (config.head) {
    config.head = config.head.filter((hd) => hd[0] !== 'link')
  }
  return config
}
