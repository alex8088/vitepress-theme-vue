<script setup lang="ts">
import { withBase, useData } from 'vitepress'
const { site, theme } = useData()
</script>

<template>
  <slot name="navbar-icon">
    <img
      v-if="theme.navLogo"
      class="logo"
      :src="withBase(theme.navLogo)"
      alt="Logo"
    />
  </slot>
  <slot name="navbar-title">
    <span v-if="site.title" class="text">{{ site.title }}</span>
  </slot>
</template>
<style>
.logo {
  position: relative;
}

.VPNavBarTitle img.logo {
  max-height: 24px;
}

.logo + .text,
svg + .text {
  padding-left: 8px;
}

.text {
  font-size: 16px;
  font-weight: 500;
}
</style>
