<template>
    <UPageSection
        id="contact-us"
        title="Get In Touch"
        description="Bridging Relationships Between Labor and Capital. Reach out today to discuss a business partnership, or submit your resume to join our talent pool. You can contact our team directly or visit our main office."
        orientation="horizontal"
        :ui="{
            root: 'bg-abyan-blue-500',
            title: 'text-abyan-white',
            description: 'text-abyan-white',
            container: 'py-12 sm:py-12 lg:py-12',
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
                :ui="{
                    root: 'bg-abyan-blue-100',
                    title: 'text-abyan-blue-500',
                    description: 'text-xs font-bold text-abyan-blue-800'
                }"
            >
                <template #description>
                    (02)8731-6384 <br>
                    (02)8255-5762
                </template>
            </UPageCard>

            <UPageCard
                title="Send us your resume"
                description="yourfuturestartshere2025@gmail.com"
                :ui="{
                    root: 'bg-abyan-blue-100',
                    title: 'text-abyan-blue-500',
                    description: 'text-xs font-bold text-abyan-blue-800'
                }"
            />

            <UPageCard
                title="Visit our main office"
                description="3rd Floor, Unit 18, Legazpi Tower, 2600 Roxas Blvd, Malate, Manila, 1004 Metro Manila."
                :ui="{
                    root: 'bg-abyan-blue-100',
                    title: 'text-abyan-blue-500',
                    description: 'text-xs font-bold text-abyan-blue-800'
                }"
            />

            <UPageCard
                title="Iloilo office"
                description="#51 Valeria Extension Street, Brgy. Nonoy Iloilo City."
                :ui="{
                    root: 'bg-abyan-blue-100',
                    title: 'text-abyan-blue-500',
                    description: 'text-xs font-bold text-abyan-blue-800'
                }"
            />

            <UPageCard
                title="Tacloban office"
                description="Door 5 Lot 2 Block 1 Lolita Homes Subdivision, Brgy. Guindapunan, Palo, Leyte."
                :ui="{
                    root: 'bg-abyan-blue-100',
                    title: 'text-abyan-blue-500',
                    description: 'text-xs font-bold text-abyan-blue-800'
                }"
            />
            
            <UPageCard
                title="Davao office"
                description="Door 6, Plaza De Tavera Bldg. Camus Ext., Davao City."
                :ui="{
                    root: 'bg-abyan-blue-100',
                    title: 'text-abyan-blue-500',
                    description: 'text-xs font-bold text-abyan-blue-800'
                }"
            />
        </UPageGrid>
    </UPageSection>
</template>