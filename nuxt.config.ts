import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    // devtools: {enabled: true},

    modules: ['@vueuse/nuxt', '@pinia/nuxt'],

    css: ['~/assets/scss/styles.scss'],

    vite: {
        plugins: [svgLoader()],

        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
						@import "~/assets/scss/base/variables.scss";
						@import "~/assets/scss/base/mixins.scss";
						@import "~/assets/scss/base/functions.scss";
					`,
                },
            },
        },
    }
})
