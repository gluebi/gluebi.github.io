// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Oliver Pietsch | Web Developer & Media Designer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: ['~/assets/main.css'],

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
  ],
  
  devServer: {
    port: 3033
  },

  generate:{
    nojekyll: true, //not working on this version
  },
  ssr: true, //server side rendered enabled //When true
  target: "static", // and static, nuxt generates a hybrid static site
})
