<template>
    <NuxtLink :to="isTestPage ? '/' : '/test'">
      Bu yazı, sizi {{ isTestPage ? '/' : '/test' }} sayfasına yönlendirir.
    </NuxtLink><br>
    <a href="https://v3.nuxtjs.org">Bu yazı, sizi v3.nuxtjs.org sayfasına yönlendirir.</a><br>
</template>
<script setup>
    const route = useRoute()
    const path = route.path
    const isTestPage = path == '/test'
</script>