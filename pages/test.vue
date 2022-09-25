<template>
      <main>
      <br><br>
      <div style="text-align: center;align-items: center;">
      <h1>Benim ilk Nuxt.js Web Sitem!</h1>
      <img src="https://nuxtjs.org/design-kit/colored-white-text.png"><br>
      <Links></Links>
      </div>
    </main>
  </template>
  <script setup>
    const title = "Test - Nuxt.js"
    useHead({
      title: title,
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
    })
  </script>
  <style scope>
    * {
      background-color: #002E3B;
      color: white;
      font-family: 'Quick-sand', sans-serif;
  }
  h1, h2, h3, h4, h5, h6{
      color: #00DC82;
      font-family: 'Quick-sand', sans-serif;
  }
  a {
      text-decoration: none;
  }
  a:hover {
      color: #00DC82;
  }
  ::selection{
      color: #002E3B;
      background-color: #00DC82;
  }
  .username {
      color: lightblue;
  }
  .durum {
      color: lightcoral;
  }
  </style>