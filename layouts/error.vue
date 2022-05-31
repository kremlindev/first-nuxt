<template>
<div style="text-align: center;align-items: center;">
  <div>
      <title>{{ title }}</title>
      <br><br>
    <h1 v-if="error.statusCode === 404">Uh! Oh! Böyle bir Sayfa Yok Gibi Görünüyor.</h1>
    <h1 v-else>Oh! Uh! Bir Hata Oluştu!</h1>
    <img src="https://nuxtjs.org/design-kit/colored-white-text.png"><br><br>
    <NuxtLink to="/">Ana Sayfa</NuxtLink>
  </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error',
    data() {
        return {
          title: `Error - Nuxt.js`
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
