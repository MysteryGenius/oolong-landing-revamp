// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui'
  ],
  css: [
    '@/assets/css/index.css'
  ],
  plugins: [
    { src: '@/plugins/particles', ssr: false }
  ],
})
