<template>
  <main>
    <title>{{ title }}</title>
    <br><br>
    <div style="text-align: center;align-items: center;">
    <h1>Benim ilk Nuxt.js Web Sitem!</h1>
    <img src="https://nuxtjs.org/design-kit/colored-white-text.png"><br>
    <NuxtLink to="/test">
      Bu yazı, sizi /test sayfasına yönlendirir.
    </NuxtLink><br>
    <a href="https://nuxtjs.org">Bu yazı, sizi nuxtjs.org sayfasına yönlendirir.</a><br>
    Kullanıcı Adı: <span v-if="$fetchState.pending"><img width="20px" height="20px" src="https://istituzionale.bper.it/o/bper.events.archive/images/loading-spinner.gif"> Veri Çekiliyor...</span><span v-else-if="$fetchState.error">Bir hata oluştu!</span><span v-else><span class="username">{{ lanyard.data.discord_user.username }}#{{ lanyard.data.discord_user.discriminator }}</span></span><br>
    Durum: <span v-if="$fetchState.pending"><img width="20px" height="20px" src="https://istituzionale.bper.it/o/bper.events.archive/images/loading-spinner.gif"> Veri Çekiliyor...</span><span v-else-if="$fetchState.error">Bir hata oluştu!</span><span v-else><span class="durum">{{lanyard.data.discord_status == "dnd" ? "Rahatsız Etmeyin" : lanyard.data.discord_status == "idle" ? Boşta : lanyard.data.discord_status == "offline" ? "Çevrimdışı" : lanyard.data.discord_status == "online" ? "Çevrimiçi" : "Bir Hata oluştu."}}</span></span>
    </div>
  </main>
</template>
  <script>
  let lanyardURL = "https://api.lanyard.rest/v1/users/539843855567028227";
   export default {
     data() {
      return {
        lanyard: [],
        title: "Anasayfa - Nuxt.js"
      }
    },
    async fetch() {
      this.lanyard = await fetch(lanyardURL).then(res => res.json())
    },
      head() {
        return {
        title: this.title,
        link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://nuxtjs.org/design-kit/colored-logo.png' }]
      }
      }
      }
  </script>