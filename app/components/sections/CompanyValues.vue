<script setup lang="ts">
import type { PageFeatureProps } from '@nuxt/ui'

const features = ref<PageFeatureProps[]>([
  {
    title: 'VISION',
    description: "Equitable work, real growth, on people's own terms. We're building a community of self-made workers with the means to live better.",
    icon: 'i-lucide-telescope',
	ui: {
		title: 'text-abyan-blue-900',
		description: 'text-abyan-muted',
		leadingIcon: 'text-abyan-blue-600' 
	}
  },
  {
    title: 'MISSION',
    description: "We grow the professional capability of every worker we place. That's how we build stronger communities — one competent, well-prepared employee at a time.",
    icon: 'i-lucide-rocket',
	ui: {
		title: 'text-abyan-blue-900',
		description: 'text-abyan-muted',
		leadingIcon: 'text-abyan-blue-600' 
	}
  },
  {
    title: 'GOAL',
    description: "To grow beyond where we stand today — into new markets, with a name industries trust. Getting there means putting more people in a position to lead.",
    icon: 'i-lucide-target',
	ui: {
		title: 'text-abyan-blue-900',
		description: 'text-abyan-muted',
		leadingIcon: 'text-abyan-blue-600' 
	}
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
			class="w-full h-40 object-cover object-center md:h-auto m:object-contain rounded-4xl"
			alt="abyan-executives-group-photo"
			loading="lazy"
		/>
	</UPageSection>
</template>