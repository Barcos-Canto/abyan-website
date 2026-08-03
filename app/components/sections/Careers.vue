<template>
    <UPageSection
        title="Careers"
        orientation="horizontal"
    >
        <template #description>
            Name:__________
        </template>

        <UFileUpload
            :dropzonze="true"
            :interactive="true"
            highlight
            accept="application/pdf"
            label="Upload Your Resume"
            description="PDF (max 2MB)"
            size="xl"
        />
    </UPageSection>
</template>