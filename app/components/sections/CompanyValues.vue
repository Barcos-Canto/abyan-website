<script setup lang="ts">
import type { PageFeatureProps } from '@nuxt/ui'

const features = ref<PageFeatureProps[]>([
  {
    title: 'VISION',
    description: "Equitable work, real growth, on people's own terms. We're building a community of self-made workers with the means to live better.",
    icon: 'i-lucide-telescope',
    to: '/docs/getting-started/integrations/icons'
  },
  {
    title: 'MISSION',
    description: "We grow the professional capability of every worker we place. That's how we build stronger communities — one competent, well-prepared employee at a time.",
    icon: 'i-lucide-rocket',
    to: '/docs/getting-started/integrations/fonts'
  },
  {
    title: 'GOAL',
    description: "To grow beyond where we stand today — into new markets, with a name industries trust. Getting there means putting more people in a position to lead.",
    icon: 'i-lucide-target',
    to: '/docs/getting-started/integrations/color-mode'
  }
])
</script>

<template>
    <UPageSection
        id="#company-values"
        title="Company Values"
        :features="features"
        :ui="{
            container: 'py-12 sm:py-12 lg:py-12',
        }"
    />
</template>