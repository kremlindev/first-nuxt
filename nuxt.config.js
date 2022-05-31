export default {
  server: {
    host: 'localhost',
    port: 3000
  },
  loading: {
   color: "00DC82",
   filedColor: "ff6961",
   height: "5px",
   continuous: false
  },
    axios: {
     //proxy: true
      },
    css: ['~/assets/main.css'],
    script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
        }
      ],
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'This website made with <3 & Nuxt.js by FalsisDev ',
          name: 'Nuxt.js',
          content: 'This website made with <3 & Nuxt.js by FalsisDev '
        }
    ],
    loading: {
        color: "303136"
    },
    modules: ['@nuxtjs/axios'],
    target: 'static'
  }