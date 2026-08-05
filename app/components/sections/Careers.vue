<script setup lang="ts">
const supabase = useSupabaseClient();

const state = reactive({
    instrument: ''
})

const toast = useToast()

async function onSubmit (){
    console.log(state)

    const { error } = await supabase
        .from('instruments')
        .insert({ name: state.instrument })

    if (error) {
        console.log(error)
        toast.add({title: 'Fail', description: 'Error' + error, color: 'error'})
        return
    } else {
        toast.add({title: 'Sent', description: 'Submission Successful', color: 'success'})
    }
}

const config = useRuntimeConfig()
const {data, error} = await useFetch(config.public.sheetApiUrl, 
{ params: { key: config.public.sheetApiKey}, server: false} )

console.log('data:', JSON.stringify(data.value, null, 2))
console.log('error:', error.value)
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

        <UForm :state="state" @submit="onSubmit">
            <UFormField label="New Instrument" name="instrument">
                <UInput v-model="state.instrument" />
            </UFormField>

            <UButton 
                label="Add Instrument"
                color="primary"
                type="submit"
            />
        </UForm>
    </UPageSection>
</template>