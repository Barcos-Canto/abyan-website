<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from '@nuxt/ui'

const features = ref<PageFeatureProps[]>([
  {
    title: 'Management Consultancy',
    description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
    icon: 'i-lucide-chess-rook',
    ui: {
            title: 'text-abyan-white',
            description: 'text-abyan-blue-200',
            leadingIcon: 'text-abyan-white'     
    }
  },
  {
    title: 'Manpower',
    description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.',
    icon: 'i-lucide-users',
    ui: {
        title: 'text-abyan-white',
        description: 'text-abyan-blue-200',
        leadingIcon: 'text-abyan-white'     
    }
  },
  {
    title: 'Human Capital Development',
    description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.',
    icon: 'i-lucide-chart-spline',
    ui: {
            title: 'text-abyan-white',
            description: 'text-abyan-blue-200',
            leadingIcon: 'text-abyan-white'     
    }
  }
])
</script>

<template>
    <UPageSection
        id="services"
        class="bg-abyan-blue-500"
        title="Comprehensive Workplace Solutions"
        headline="What We Deliver"
        description="Our services are rooted in fostering strong relationships, promoting career growth, and ensuring that both job seekers and businesses thrive in a collaborative and conflict-free environment."
        orientation="horizontal"
        reverse
        :features="features"
        :ui="{
            title: 'text-abyan-white',
            description: 'text-abyan-blue-200',
            container: 'py-12 sm:py-12 lg:py-12',
        }"
    >
		<UPageGrid class="gap-2">
			<UPageCard 
				class="bg-abyan-blue-500 lg:col-span-2"
				:ui="{
					root: 'ring-0',
					container: 'p-0 sm:p-0'
				}"
			>
				<img src="/images/group-photo-men-v2.webp" class="w-full h-64 rounded-xl object-cover">
			</UPageCard>

			<UPageCard 
				class="bg-abyan-blue-500"
				:ui="{
					root: 'ring-0',
					container: 'p-0 sm:p-0'
				}"
			>
				<img src="/images/adults-and-children.webp" class="w-full h-64 rounded-xl object-cover">
			</UPageCard>

			<UPageCard 
				class="bg-abyan-blue-500"
				:ui="{
					root: 'ring-0',
					container: 'p-0 sm:p-0'
				}"
			>
				<img src="/images/group-photo-women-v1.webp" class="w-full h-64 rounded-xl object-cover">
			</UPageCard>

			<UPageCard 
				class="bg-abyan-blue-500 lg:col-span-2"
				:ui="{
					root: 'ring-0',
					container: 'p-0 sm:p-0'
				}"
			>
				<img src="/images/group-photo-men-v1.webp" class="w-full h-64 rounded-xl object-cover">
			</UPageCard>
		</UPageGrid>
    </UPageSection>
</template>