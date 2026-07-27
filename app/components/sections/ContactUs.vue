<template>
    <UPageSection
        id="contact-us"
        title="Get In Touch"
        description="Bridging Relationships Between Labor and Capital. Reach out today to discuss a business partnership, or submit your resume to join our talent pool. You can contact our team directly or visit our main office."
        orientation="horizontal"
        :ui="{
            root: 'bg-abyan-blue-950',
            title: 'text-abyan-white',
            description: 'text-abyan-blue-200',
            container: 'sm:items-start lg:items-start py-12 sm:py-12 lg:py-12',
        }"
    >
        <UPageGrid
        :ui="{
            base: 'lg:grid-cols-2'
        }"
        >
            <UPageCard
                class="whitespace-pre-wrap"
                title="Call us"
                icon="i-lucide-phone"
                :ui="{
                    root: 'bg-abyan-blue-50',
                    title: 'text-abyan-blue-900',
                    description: 'text-xs font-bold text-abyan-blue-950',
                    leadingIcon:'text-abyan-blue-950'
                }"
            >
                <template #description>
                    (02)8731-6384 <br>
                    (02)8255-5762
                </template>
            </UPageCard>

            <UPageCard
                title="Visit our main office"
                description="3rd Floor, Unit 18, Legazpi Tower, 2600 Roxas Blvd, Malate, Manila, 1004 Metro Manila."
                icon="i-lucide-map-pin"
                target="_blank"
                :ui="{
                    root: 'bg-abyan-blue-50',
                    title: 'text-abyan-blue-900',
                    description: 'text-xs font-bold text-abyan-blue-950',
                    leadingIcon:'text-abyan-blue-950'
                }"
            />
        </UPageGrid>
    </UPageSection>
</template>