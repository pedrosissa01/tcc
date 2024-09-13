// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@vueuse/nuxt',
    '@nuxt/ui',
    [
      '@pinia/nuxt',{
        autoImports: [
          'defineStore',
          'usePinia'
        ],
      },
    ], 
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt'
  ],
  css: [
    '@/assets/css/main.css',
  ],
  imports: {
    dirs: ['stores'],
  },
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
})
