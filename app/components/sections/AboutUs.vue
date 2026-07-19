<template>
    <UPageSection
        id="about-us"
        title="About Us"
        description="Founded in November 2015, Abyan Mgt. Services Corp. set out to bridge the relationship 
        between labor and capital. We're a corporation duly registered with the Securities and Exchange Commission, 
        and a legitimate service contractor under DOLE Department Order No. 174. As we grow, innovation in how we 
        work will be continuous — but the dignity of work and the rights of our workers will always come first."
        :ui="{
            root: 'bg-abyan-white'
        }"
    >
        <UMarquee class="mt-2" :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }">
            <img src="/images/man-digging-soil.jpg" class="w-50 aspect-5/7 object-cover rounded-3xl">
            <img src="/images/man-operating-farm-equipment.jpg" class="w-50 aspect-5/7 object-cover rounded-3xl">
            <img src="/images/man-spraying-plants.jpg" class="w-50 aspect-5/7 object-cover rounded-3xl">
            <img src="/images/men-group-photo-v1.jpg" class="w-50 aspect-5/7 object-cover rounded-3xl">
            <img src="/images/mwn-sorting-fruit.jpg" class="w-50 aspect-5/7 object-cover rounded-3xl">
        </UMarquee>
    </UPageSection>
</template>