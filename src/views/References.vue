<template>
  <div class="referenzen">
    <ListComponent
      :headline="listComponentHeadline"
      :content="listComponentItem"
    >
    </ListComponent>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ListComponent from "@/components/ListComponent.vue";

@Options({
  name: "References",
  components: {
    ListComponent,
  },
})
export default class Referenzen extends Vue {
  listComponentHeadline: string = "References.vue";

  listComponentItem: Array<string> = [
    'Senior Frontend Developer at <a href="https://www.customer-alliance.com/" title="Customer Alliance" target="_blank" rel="noopener">CA Customer Alliance GmbH</a>',
    'Frontend Developer at <a href="https://mercedes-benz.io" title="Mercedes-Benz.io" target="_blank" rel="noopener">Mercedes-Benz.io</a>',
    'Frontend Developer at <a href="https://www.publicispixelpark.de/" title="Publicis Pixelpark" target="_blank" rel="noopener">Publicis Pixelpark</a>',
    'Freelance work at <a href="https://www.co2online.de" title="co2online" target="_blank" rel="noopener">co2online gGmbH</a> als Typo3 Assistenz',
    'Freelance work at <a href="https://www.mentronic.com" title="mentronic" target="_blank" rel="noopener">mentronic Digitale Kommunkation</a>',
    "Technology Assistant at Stanford University in Berlin (Bing Overseas Studies Program)",
    'Freelance work at <a href="https://www.blitzrechner.de" title="Blitzrechner" target="_blank" rel="noopener">www.blitzrechner.de</a> and <a href="https://www.blitzresults.com" title="Blitzresults" target="_blank" rel="noopener">www.blitzresults.com</a> as developer',
    'Ausbildung zum Mediengestalter bei <a href="http://www.laborfuergestaltung.de" title="Labor für Gestaltung" target="_blank" rel="noopener">Labor für Gestaltung Schleßelmann GmbH</a>',
    'Technische Umsetzung der Website <a href="http://http://www.laborfuergestaltung.de" title="Labor für Gestaltung" target="_blank" rel="noopener">www.laborfuergestaltung.de</a>',
  ];
}
</script>
