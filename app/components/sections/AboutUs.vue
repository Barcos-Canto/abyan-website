<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from '@nuxt/ui'

const features = ref<PageFeatureProps[]>([
  {
    title: 'Integrity',
    icon: 'i-lucide-scale',
    ui: {
            title: 'text-abyan-blue-950',
            leadingIcon: 'text-abyan-blue-800'     
    }
  },
  {
    title: 'Loyalty',
    icon: 'i-lucide-handshake',
    ui: {
            title: 'text-abyan-blue-950',
            leadingIcon: 'text-abyan-blue-800'     
    }
  },
  {
    title: 'Professionalism',
    icon: 'i-lucide-briefcase-business',
    ui: {
            title: 'text-abyan-blue-950',
            leadingIcon: 'text-abyan-blue-800'     
    }
  },
  {
    title: 'Teamwork',
    icon: 'i-lucide-puzzle',
    ui: {
            title: 'text-abyan-blue-950',
            leadingIcon: 'text-abyan-blue-800'     
    }
  },
  {
    title: 'Concern for Others',
    icon: 'i-lucide-hand-heart',
    ui: {
            title: 'text-abyan-blue-950',
            leadingIcon: 'text-abyan-blue-800'     
    }
  },
  {
    title: 'Disciplined and Responsible',
    icon: 'i-lucide-anchor',
    ui: {
            title: 'text-abyan-blue-950',
            leadingIcon: 'text-abyan-blue-800'     
    }
  },
])
</script>

<template>
    <UPageSection
        id="about-us"
        title="About Us"
        description="Founded in November 2015, Abyan Mgt. Services Corp. set out to bridge the relationship 
        between labor and capital. As we grow, innovation in how we work will be continuous — but the dignity 
        of work and the rights of our workers will always come first. We continue to pursue in imparting our 
        core values among our talents:"
		headline="Our Best Qualities"
        orientation="horizontal"
        :features="features"
        :ui="{
            root: 'bg-abyan-white',
            container: 'py-12 sm:py-12 lg:py-12',
			title: 'text-abyan-blue-950',
			description: 'text-abyan-blue-900',
			headline: 'text-abyan-blue-900'
        }"
    >
		<img
			src="/images/award-group-photo.webp"
			class="w-full aspect-square object-cover rounded-xl"
			alt="abyan-executives-awarding-photo"
			loading="lazy"
		/>
    </UPageSection>
</template>