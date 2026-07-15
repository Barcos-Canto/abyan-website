<script setup lang="ts">
const items = [
    {
        src: '/brands/dominos-pizza.webp', 
        alt: 'Dominos Pizza Logo'
    },
    {
        src: '/brands/mcdo.webp', 
        alt: 'McDonalds Logo'
    },
        {
        src: '/brands/san-miguel.webp', 
        alt: 'San Miguel Corporation Logo'
    },
        {
        src: '/brands/anchor-land.png', 
        alt: 'Anchor Land Holdings Inc Logo'
    },
        {
        src: '/brands/megaworld.png', 
        alt: 'Megaworld Logo'
    },
        {
        src: '/brands/honda.png', 
        alt: 'Honda Logo'
    },
        {
        src: '/brands/hyundai.png', 
        alt: 'Hyundai Logo'
    },
        {
        src: '/brands/mitsubishi.png', 
        alt: 'Mitsubishi Logo'
    },
        {
        src: '/brands/suzuki.png', 
        alt: 'Suzuki Logo'
    },
        {
        src: '/brands/toyota.png', 
        alt: 'Toyota Logo'
    },
]
</script>

<template>
    <div class="w-full bg-abyan-white">
        <UContainer>
            <section id="hero" class="text-abyan-blue-950">
                <div>
                    <div class="text-center">
                        <h6>Fostering partnerships since 2015</h6>
                        <h1>Trusted By Known Brands</h1>
                    </div>

                    <UPageLogos :items="items" />
                    
                    <div>
                        <!-- ...and many more! join us button -->
                    </div>
                </div>
            </section>
        </UContainer>
    </div>
</template>