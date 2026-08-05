// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				compatibilityDate: '2025-07-15',
				devtools: { enabled: true },
				modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/supabase'],
				css: ['~/assets/css/main.css'],
				ui: {colorMode: false},
				supabase: {
					redirect: false,
					redirectOptions: {
						login: '/login',
						callback: '/confirm',
						exclude: ['/*']
					}
				},
				runtimeConfig: {
					public: {
						sheetApiUrl: '',
						sheetApiKey: ''
					}
				}
})