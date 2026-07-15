<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Trusted Partners'
  },
  {
    label: 'Services'
  },
  {
    label: 'About Us'
  },
  {
    label: 'Contact'
  }
])
</script>

<template>
     <UHeader class="bg-abyan-blue-500 px-16">

        <template #title>
            <div class="h-6 w-auto text-abyan-white">ABYAN</div>
        </template>

        <UNavigationMenu 
    		:items="items"
			:ui="{
				link: 'text-abyan-white hover:text-abyan-white'
			}"
			variant="pill"
			/>

        <template #right>
            <UButton
                label="Tracking"
                class="rounded-full border border-abyan-white text-abyan-white hover:bg-abyan-white hover:text-abyan-blue-500"
                to="https://delivery.abyan.ph/track"
                target="_blank"
            />
        </template>

        <!-- For Hamburger menu -->
        <template #body> 
        	<UNavigationMenu 
    			:items="items"
				:ui="{
					link: 'text-abyan-white hover:text-abyan-white'
				}"
				variant="pill"
			/> 
        </template> 

    </UHeader>
</template>
