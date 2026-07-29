<template>
    <UPageSection
        id="partners"
        headline="Trusted since 2015 — and still growing with the partners who believed in us first"
        title="Trusted By Known Brands"
        :ui="{
            root: 'bg-abyan-white',
            container: 'py-12 sm:py-12 gap-4 sm:gap-4 lg:py-12',
            title: 'flex justify-start mb-4 text-abyan-blue-950',
            headline: 'flex justify-start text-abyan-blue-900',
        }"
    >

    <template>
        <UMarquee :overlay="false">
            <img src="/brands/dominos-pizza.webp" alt="Dominos Pizza Logo" class="w-full h-12 object-contain" loading="lazy"/>
            <img src="/brands/mcdo.webp" alt="Mcdo Logo" class="w-full h-14 object-cover" loading="lazy"/>
            <img src="/brands/san-miguel.webp" alt="San Miguel Corporation Logo" class="w-full h-36 object-contain" loading="lazy"/>
            <img src="/brands/UCC.webp" alt="UCC Logo" class="w-full h-12 object-contain" loading="lazy"/>
            <img src="/brands/anchor-land.webp" alt="Anchor Land Holdings Logo" class="w-full h-8 object-cover" loading="lazy"/>
            <img src="/brands/megaworld.webp" alt="Megaworld Logo" class="w-full h-20 object-contain" loading="lazy"/>

            <!-- Nuxt HATES honda. long story short, do not put honda.webp nor anything honda related into this section -->
            <img src="/brands/hyundai.webp" alt="Hyundai Logo" class="w-full h-8 object-contain" loading="lazy"/>
            <img src="/brands/mitsubishi.webp" alt="Mitsubishi Logo" class="w-full h-12 object-contain" loading="lazy"/>
            <img src="/brands/suzuki.webp" alt="Suzuki Logo" class="w-full h-8 object-contain" loading="lazy"/>
            <img src="/brands/toyota.webp" alt="Toyota Logo" class="w-full h-8 object-contain" loading="lazy"/>
        </UMarquee>
    </template>

        <div class="flex justify-center animate-bounce">
            <a href="#contact-us" class="rounded-full group px-4 py-2 mt-8 text-xs text-center ring-1 ring-abyan-blue-200 bg-abyan-blue-950 hover:bg-abyan-blue-200">
                <span class="text-abyan-blue-200 group-hover:text-abyan-blue-900">
                    Interested Working Together?
                </span>
                <span class="font-bold text-abyan-white group-hover:text-abyan-blue-950" > 
                    Reach Out!
                </span>
            </a>
        </div>

    </UPageSection>
</template>