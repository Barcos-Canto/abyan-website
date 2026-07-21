<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from '@nuxt/ui'

const features = ref<PageFeatureProps[]>([
  {
    title: 'Integrity',
    icon: 'i-lucide-scale',
  },
  {
    title: 'Loyalty',
    icon: 'i-lucide-handshake',
  },
  {
    title: 'Professionalism',
    icon: 'i-lucide-briefcase-business',
  },
  {
    title: 'Teamwork',
    icon: 'i-lucide-puzzle',
  },
  {
    title: 'Concern for Others',
    icon: 'i-lucide-hand-heart',
  },
  {
    title: 'Disciplined and Responsible',
    icon: 'i-lucide-anchor',
    ui: {
            title: 'text-abyan-blue-950',
            leadingIcon: 'text-abyan-blue-500'     
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
        orientation="horizontal"
        :features="features"
        :ui="{
            root: 'bg-abyan-white',
            container: 'py-12 sm:py-12 lg:py-12',
        }"
    >
    </UPageSection>
</template>