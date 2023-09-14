<template>
  <div
    class="space-y-4"
  >
    <p>Hello, I am Oliver.</p>
    <p>
      I design and build SPAs with <a 
        href="https://nuxt.com/" 
        title="Nuxt.js" 
        target="_blank" 
        rel="noopener"
        class="underline"
      >Nuxt.js</a> and <a 
        href="https://vuejs.org/" 
        title="Vue.js" 
        target="_blank" 
        rel="noopener"
        class="underline"
      >Vue.js</a>
    </p>
    <p>
      Currently I am employed at <a 
        href="https://cycle.eco/" 
        title="CYCLE" 
        target="_blank" 
        rel="noopener"
        class="underline"
      >CYCLE</a>.
    </p>
    <p>
      You can contact me <a 
        href="mailto:kontakt@oliver-pietsch.de"
        class="underline"
      >here</a> (<a 
        href="https://oliver-pietsch.de/kontakt_at_oliver-pietsch.de_public_key.asc" 
        class="underline"
      >PGP Key</a>).
    </p>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: 'About me',
  description: 'Home page description',
  layout: 'default',
  name: 'About me'
})
</script>