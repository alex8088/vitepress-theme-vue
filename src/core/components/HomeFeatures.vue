<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const hasFeatures = computed(() => {
  return frontmatter.value.features && frontmatter.value.features.length > 0
})

interface Feature {
  title?: string
  details?: string
}

const features = computed<Feature[]>(() => {
  return frontmatter.value.features ? frontmatter.value.features : []
})
</script>

<template>
  <div v-if="hasFeatures" class="home-features">
    <div class="wrapper">
      <div class="container">
        <div class="features">
          <section
            v-for="(feature, index) in features"
            :key="index"
            class="feature"
          >
            <h2 class="title" v-if="feature.title">{{ feature.title }}</h2>
            <p class="details" v-if="feature.details">{{ feature.details }}</p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-features {
  margin: 0 auto;
  padding: 3.25rem 1.5rem;
  max-width: 960px;
}

.home-hero + .home-features {
  padding-top: 0;
}

.home-hero + .home-features .wrapper {
  border-top: 1px solid var(--vt-c-divider-light);
  padding-top: 3.25rem;
}

.features {
  display: flex;
  flex-wrap: wrap;
  margin: -20px -24px;
}

.feature {
  flex-shrink: 0;
  padding: 20px 24px;

  width: calc(100% / 3);
}

.title {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

.details {
  line-height: 1.6;
  font-size: 1rem;
  color: var(--vt-c-text-2);
}

@media (max-width: 960px) {
}

@media (max-width: 768px) {
  .feature {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .home-features {
    padding: 2.5rem 0;
  }
  .home-hero + .home-features .wrapper {
    padding-top: 2.5rem;
  }
  .wrapper {
    padding: 0 1.5rem;
  }

  .container {
    margin: 0 auto;
    max-width: 392px;
  }
}
</style>
