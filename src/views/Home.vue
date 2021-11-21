<template>
  <div class="home">
    <TextComponent
      :headline="textComponentHeadline"
      :content="textComponentContent"
    ></TextComponent>
  </div>
</template>

<script setup lang="ts">
import TextComponent from "@/components/TextComponent.vue";

const textComponentHeadline: string = "Frontend Developer & Mediengestalter";
const textComponentContent: Array<string> = [
  "Hello, I am Oliver.",
  'I design and build SPAs with <a href="https://vuejs.org/" title="Vue.js" target="_blank" rel="noopener">Vue.js</a>',
  'Currently I am employed at <a href="https://www.customer-alliance.com/" title="Customer Alliance" target="_blank" rel="noopener">CA Customer Alliance GmbH</a>.',
  'You can contact me <a href="mailto:kontakt@oliver-pietsch.de">here</a> (<a href="https://oliver-pietsch.de/kontakt_at_oliver-pietsch.de_public_key.asc" download rel="noopener" >PGP Key</a>).',
];
</script>
