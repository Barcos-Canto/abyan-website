<template>
    <UPageSection
        title="Contact Form"
        headline="Start your career"
        orientation="horizontal"
        :ui="{
            container: 'sm:items-start lg:items-start py-12 sm:py-24 lg:py-24',
        }"
    >
        <template #description>
            <UBadge color="warning" sie="xl">! This feature is temporarily <span class="font-bold">DISABLED</span></UBadge>
        </template>
        <UForm
        >
            <UFormField
                label="Name"
                class="my-4"
                required
            >
                <UInput />
            </UFormField>

            <UFormField
                label="Contact No."
                description="Make sure you use your active number"
                type="number"
                class="my-4"
                required
            >
                <UInput />
            </UFormField>     

            <UFormField
                class="my-4"
            >
                <UFileUpload
                    :dropzone="true"
                    :interactive="true"
                    highlight
                    accept="application/pdf"
                    label="Upload Your Resume"
                    description="PDF (max 2MB)"
                    icon="i-lucide-file-text"
                    color="primary"
                    size="xl"
                />
            </UFormField>

            <UButton 
                class="my-4"
                type="submit"
                disabled
            >
                Submit
            </UButton>
        </UForm>
    </UPageSection>
</template>