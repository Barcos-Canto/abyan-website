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
        <div class="rounded-b-lg shadow-abyan-blue-900/10 shadow-lg mx-auto grid max-w-xl items-center gap-x-8 gap-y-8 pb-4 grid-cols-2 md:grid-cols-5 md:mx-0 md:max-w-none">
            <img width="180" height="60" src="/brands/dominos-pizza.webp" alt="Dominos Pizza Logo" class="max-h-12 w-full object-contain"/>
            <img width="180" height="60" src="/brands/mcdo.webp" alt="Mcdo Logo" class="max-h-12 w-full object-contain"/>
            <img width="180" height="60" src="/brands/san-miguel.webp" alt="San Miguel Corporation Logo" class="max-h-12 w-full object-cover"/>
            <img width="180" height="60" src="/brands/UCC.webp" alt="UCC Logo" class="max-h-12 w-full object-contain"/>
            <img width="180" height="60" src="/brands/anchor-land.webp" alt="Anchor Land Holdings Logo" class="max-h-12 w-full object-cover"/>
            <img width="180" height="60" src="/brands/megaworld.webp" alt="Megaworld Logo" class="max-h-12 w-full object-cover"/>

            <!-- Nuxt HATES honda. long story short, do not put honda.webp nor anything honda related into this section -->
            <img width="180" height="60" src="/brands/hyundai.webp" alt="Hyundai Logo" class="max-h-12 w-full object-contain" />
            <img width="180" height="60" src="/brands/mitsubishi.webp" alt="Mitsubishi Logo" class="max-h-12 w-full object-contain"/>
            <img width="180" height="60" src="/brands/suzuki.webp" alt="Suzuki Logo" class="max-h-12 w-full object-contain"/>
            <img width="180" height="60" src="/brands/toyota.webp" alt="Toyota Logo" class="max-h-12 w-full object-contain"/>
        </div>

        <div class="flex justify-center animate-bounce">
            <a href="#contact-us" class="rounded-full px-4 py-2 mt-8 text-xs text-center ring-1 ring-abyan-blue-200 bg-abyan-blue-50">
                ... And Many More. Interested Working Together?
                <span class="font-bold text-abyan-blue-500" > 
                    Reach Out
                </span>
            </a>
        </div>

    </UPageSection>
</template>