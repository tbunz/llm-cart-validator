// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/styles/variables" as *;
            @use "~/assets/styles/mixins" as *;
          `,
        },
      },
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
