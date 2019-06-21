<template>
  <div class="home">
    <TextComponent :content="content"></TextComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TextComponent from "@/components/TextComponent.vue"; // @ is an alias to /src

@Component({
  components: {
    TextComponent
  }
})
export default class Home extends Vue {
  content: Array<string> = [
    "Hallo, ich bin Oliver.",
    'Ich gestalte und entwickle Websites mit <a href="https://vuejs.org/" title="Vue.js" target="_blank">Vue.js</a>',
    'Zur Zeit arbeite ich bei <a href="https://www.publicispixelpark.de/" title="Publicis Pixelpark" target="_blank">Publicis Pixelpark</a>.',
    'Du kannst mich <a href="mailto:kontakt@oliver-pietsch.de">hier</a> (<a href="https://oliver-pietsch.de/kontakt_at_oliver-pietsch.de_public_key.asc" target="_blank">PGP Key</a>) kontaktieren.'
  ];
}
</script>
