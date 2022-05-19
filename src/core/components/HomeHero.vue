<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { site, frontmatter } = useData()

const showHero = computed(() => {
  const { heroImage, heroText, description, actionButtons } = frontmatter.value
  return heroImage || heroText || description || actionButtons
})

const heroText = computed(() => frontmatter.value.heroText || site.value.title)
</script>

<template>
  <header v-if="showHero" class="home-hero">
    <figure v-if="frontmatter.heroImage" class="figure">
      <img
        class="image"
        :src="withBase(frontmatter.heroImage)"
        :alt="frontmatter.heroAlt"
      />
    </figure>

    <h1 v-if="heroText" class="title">{{ heroText }}</h1>
    <p v-if="frontmatter.description" class="description">
      {{ frontmatter.description }}
    </p>

    <div class="actions" v-if="frontmatter.actionButtons?.length">
      <a
        :class="[{ primary: index === 0 || button.primary }, button.extraClass]"
        :style="button.extraStyle"
        :href="withBase(button.link)"
        :target="button.target"
        v-for="(button, index) in frontmatter.actionButtons"
      >
        {{ button.text }}
      </a>
    </div>
  </header>
</template>

<style scoped>
.home-hero {
  max-width: 960px;
  margin: 0 auto;
  padding: 42px 32px 64px 32px;
  text-align: center;
}

.figure {
  padding: 0 1.5rem;
}

.image {
  display: block;
  margin: 0 auto;
  width: auto;
  max-width: 100%;
  max-height: 220px;
}

.title {
  line-height: 1.3;
  margin-top: 1.5rem;
  font-size: 2.6rem;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.description {
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 8px auto 30px;
}

.actions {
  display: flex;
  grid-gap: 0.8rem;
  gap: 0.8rem;
  place-content: center;
}

.title + .actions {
  margin-top: 30px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 600;
  border-radius: 6px;
  transition: background-color 0.5s, color 0.5s;
  color: var(--vt-c-text-code);
}

.actions a.primary {
  background-color: var(--vt-c-brand);
  color: #fff;
}

.actions a:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.actions a.primary:hover {
  background-color: var(--vt-c-green-dark);
  transition-duration: 0.2s;
}

.dark .actions a.primary {
  color: var(--vt-c-indigo);
}

.dark .actions a:hover {
  background-color: var(--vt-c-gray-dark-3);
}

.dark .actions a.primary:hover {
  background-color: var(--vt-c-green-light);
}

@media (max-width: 960px) {
  .title {
    font-size: 2.4rem;
  }
  .description {
    font-size: 20px;
  }
}

@media (max-width: 576px) {
  .home-hero {
    padding-bottom: 42px;
  }
  .image {
    max-height: 200px;
  }
  .title {
    font-size: 2.2rem;
  }
  .description {
    font-size: 18px;
  }
}
</style>
