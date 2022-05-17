<script setup lang="ts">
import HomeHero from './HomeHero.vue'
import HomeFeatures from './HomeFeatures.vue'
import HomeFooter from './HomeFooter.vue'
</script>

<template>
  <main class="home">
    <slot name="hero">
      <HomeHero />
    </slot>
    <slot name="features">
      <HomeFeatures />
    </slot>
    <slot name="default" />
    <slot name="footer">
      <HomeFooter />
    </slot>
  </main>
</template>
