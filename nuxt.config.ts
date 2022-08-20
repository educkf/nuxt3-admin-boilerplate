import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        ['@pinia/nuxt']
    ],

    publicRuntimeConfig: {
        hashKey: process.env.HASHKEY,
        project: process.env.PROJECT,
        projectId: process.env.PROJECT_ID,
    }
})
