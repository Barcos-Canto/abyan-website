<script setup lang="ts">
import type { PageFeatureProps } from '@nuxt/ui'

const features = ref<PageFeatureProps[]>([
  {
    title: 'VISION',
    description: "Equitable work, real growth, on people's own terms. We're building a community of self-made workers with the means to live better.",
    icon: 'i-lucide-telescope',
  },
  {
    title: 'MISSION',
    description: "We grow the professional capability of every worker we place. That's how we build stronger communities — one competent, well-prepared employee at a time.",
    icon: 'i-lucide-rocket',
  },
  {
    title: 'GOAL',
    description: "To grow beyond where we stand today — into new markets, with a name industries trust. Getting there means putting more people in a position to lead.",
    icon: 'i-lucide-target',
  }
])
</script>

<template>
    <UPageSection
        id="#company-values"
        orientation="horizontal"
        reverse
        :features="features"
        :ui="{
            container: 'lg:items-start pt-6 sm:pt-6 lg:pt-6 pb-12 sm:pb-12 lg:pb-12'
        }"
    >
		<img 
			src="/images/executives-group-photo-v2.webp"
			class="w-full h-auto object-contain rounded-xl"
			alt="abyan-executives-group-photo"
			loading="lazy"
		/>
	</UPageSection>
</template>