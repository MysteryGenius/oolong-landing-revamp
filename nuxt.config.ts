// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "//cdn-images.mailchimp.com/embedcode/classic-061523.css",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-headlessui"],
  css: ["@/assets/css/index.css"],
  plugins: [{ src: "@/plugins/particles", ssr: false }],
});
