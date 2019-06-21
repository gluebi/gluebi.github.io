<template>
  <div class="home">
    <TextComponent
      :headline="textComponentHeadline"
      :content="textComponentContent"
    ></TextComponent>
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
  textComponentHeadline: string = "Frontend Developer & Mediengestalter";

  textComponentContent: Array<string> = [
    "Hallo, ich bin Oliver.",
    'Ich gestalte und entwickle Websites mit <a href="https://vuejs.org/" title="Vue.js" target="_blank" rel="noopener">Vue.js</a>',
    'Zur Zeit arbeite ich bei <a href="https://www.publicispixelpark.de/" title="Publicis Pixelpark" target="_blank" rel="noopener">Publicis Pixelpark</a>.',
    'Du kannst mich <a href="mailto:kontakt@oliver-pietsch.de">hier</a> (<a href="https://oliver-pietsch.de/kontakt_at_oliver-pietsch.de_public_key.asc" download rel="noopener" >PGP Key</a>) kontaktieren.'
  ];
}
</script>
