<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Trusted Partners',
	to: '#partners'
  },
  {
    label: 'Services',
	to: '#services'
  },
  {
    label: 'About Us',
	to: '#about-us'
  },
  {
    label: 'Contact Us',
	to: '#contact-us'
  }
])
</script>

<template>
     <UHeader 
	 	class="bg-abyan-blue-500 px-6 md:px-16 border-0 border-transparent"
		:ui="{
			header: 'bg-abyan-blue-500',
			body: 'bg-abyan-blue-500'
		}"
		>

        <template #title>
            <div class="flex h-6 w-auto">
            	<img
					src="/logos/abyan-logo-white-smallest.webp"
					class="w-auto h-auto object-contain"
					alt="Abyan Logo"
			  	></img>
				<span class="class text-abyan-white">ABYAN</span>
            </div>
        </template>

        <!-- Actual Menu Items -->
        <UNavigationMenu 
    		:items="items"
			:ui="{
				link: 'text-abyan-blue-100 hover:text-abyan-white hover:cursor-pointer'
			}"
			variant="link"
			/>

        <template #right>
            <UButton
                label="Tracking"
				icon="i-lucide-package-search"
				size="lg"
                class="rounded-full border font-bold border-abyan-white text-abyan-white hover:bg-abyan-white hover:text-abyan-blue-500"
                to="https://delivery.abyan.ph/track"
                target="_blank"
            />
        </template>

        <!-- For Hamburger Menu -->
        <template #body>
			<UNavigationMenu 
				:items="items"
				:ui="{
					link: 'text-abyan-white'
				}"
				orientation="vertical"
				variant="link"
			/> 
        </template> 

    </UHeader>
</template>
