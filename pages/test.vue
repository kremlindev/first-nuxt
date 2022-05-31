<template>
  <main>
    <title>{{ title }}</title>
    <br><br>
    <div style="text-align: center;align-items: center;">
    <h1>Benim ilk Nuxt.js Web Sitem!</h1>
    <img src="https://nuxtjs.org/design-kit/colored-white-text.png"><br>
    <NuxtLink to="/">
      Bu yazı, sizi / sayfasına yönlendirir.
    </NuxtLink><br>
    <a href="https://nuxtjs.org">Bu yazı, sizi nuxtjs.org sayfasına yönlendirir.</a>
    </div>
  </main>
</template>
  <script>
    export default {
      data() {
        return {
          title: "Test - Nuxt.js"
        }
      },
      head() {
        return {
        title: this.title,
        link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://nuxtjs.org/design-kit/colored-logo.svg' }]
      }
      }
    }
  </script>
