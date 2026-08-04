<script setup lang="ts">
    const state = reactive({
        name: '',
        contactNo: ''
    })

    const toast = useToast()

    function onSubmit (){
        console.log(state)

        // instead of immediately, only after try/catch
        toast.add({title: 'Sent', description: 'Submission Successful', color: 'success'})
    }
</script>

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
            :state="state"
            @submit="onSubmit"
        >
            <UFormField
                label="Name"
                class="my-4"
                required
            >
                <UInput v-model="state.name"/>
            </UFormField>

            <UFormField
                label="Contact No."
                description="Make sure you use your active number"
                type="number"
                class="my-4"
                required
            >
                <UInput v-model="state.contactNo"/>
            </UFormField>     

            <UFormField class="my-4">
                <UFileUpload
                    :dropzone="true"
                    :interactive="true"
                    required
                    highlight
                    type="file"
                    accept="application/pdf"
                    label="Upload Your Resume"
                    description="PDF (max 2MB)"
                    icon="i-lucide-file-text"
                    color="primary"
                    size="xl"
                />
            </UFormField>

            <UButton class="my-4" type="submit">
                Submit
            </UButton>
        </UForm>
    </UPageSection>
</template>