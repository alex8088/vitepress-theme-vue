<script setup lang="ts">
import { VPTheme } from '@vue/theme'
import NavBarTitle from './NavBarTitle.vue'

const { Layout } = VPTheme
</script>

<template>
  <Layout>
    <template #navbar-title>
      <NavBarTitle>
        <template #navbar-icon>
          <slot name="navbar-icon" />
        </template>
        <template #navbar-title>
          <slot name="navbar-title" />
        </template>
      </NavBarTitle>
    </template>
    <template #sidebar-top>
      <slot name="sidebar-top" />
    </template>
    <template #sidebar-bottom>
      <slot name="sidebar-bottom" />
    </template>
    <template #content-top>
      <slot name="content-top" />
    </template>
    <template #content-bottom>
      <slot name="content-bottom" />
    </template>
    <template #aside-top>
      <slot name="aside-top" />
    </template>
    <template #aside-mid>
      <slot name="aside-mid" />
    </template>
    <template #aside-bottom>
      <slot name="aside-bottom" />
    </template>
  </Layout>
  <Debug />
</template>

<style>
.VPFooter {
  display: none;
}
</style>
