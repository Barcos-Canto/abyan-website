<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
  {
    label: 'How can I apply?',
    slot: 'apply',
    ui: {
        label: 'text-abyan-white',
        trailingIcon: 'text-abyan-white'
    }
  },
  {
    label: 'Do you have other offices?',
    slot: 'offices',
    ui: {
        label: 'text-abyan-white',
        trailingIcon: 'text-abyan-white'
    }
  }
])
</script>

<template>
  <UPageSection
    id="faqs"
    title="FAQs"
    :ui="{
        root: 'bg-abyan-blue-950',
        container: 'gap-2 sm:gap-2 py-12 sm:py-12 lg:py-12',
        title: 'flex justify-start mb-4 text-abyan-white',
    }"
    >
    <UAccordion 
        :items="items"
    >
      <template #apply>
        <p class="text-abyan-blue-50">
            You can send your resume to
                <a href="mailto:yourfuturestartshere2025@gmail.com" class="underline">
                    yourfuturestartshere2025@gmail.com
                </a>.
            To ensure proper communication, it's recommended to fill in the subject line with your desired job title.
        </p>
      </template>

      <template #offices>
        <p class="mb-2 text-abyan-blue-50">Yes! We have offices in the following locations:</p>
        <ul class="list-disc list-inside space-y-1 text-abyan-blue-50">
            <li>
                Location 1
            </li>
            <li>
                Location 2
            </li>
        </ul>
        <p class="mt-2 text-abyan-blue-50">Our offices are open Monday–Friday, 8am–5pm.</p>
      </template>
    </UAccordion>
  </UPageSection>
</template>