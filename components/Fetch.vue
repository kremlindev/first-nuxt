<template>
    Kullanıcı Adı: <span v-if="pending"><img width="20px" height="20px" src="https://istituzionale.bper.it/o/bper.events.archive/images/loading-spinner.gif"> Veri Çekiliyor...</span><span v-else-if="error">Bir hata oluştu!</span><span v-else><span class="username">{{ lanyard.data.discord_user.username }}#{{ lanyard.data.discord_user.discriminator }}</span></span><br>
    Durum: <span v-if="pending"><img width="20px" height="20px" src="https://istituzionale.bper.it/o/bper.events.archive/images/loading-spinner.gif"> Veri Çekiliyor...</span><span v-else-if="error">Bir hata oluştu!</span><span v-else><span class="durum">{{lanyard.data.discord_status == "dnd" ? "Rahatsız Etmeyin" : lanyard.data.discord_status == "idle" ? Boşta : lanyard.data.discord_status == "offline" ? "Çevrimdışı" : lanyard.data.discord_status == "online" ? "Çevrimiçi" : "Bir Hata oluştu."}}</span></span>
</template>
<script setup>
    const { pending, data: lanyard } = useLazyFetch('https://api.lanyard.rest/v1/users/539843855567028227')
</script>