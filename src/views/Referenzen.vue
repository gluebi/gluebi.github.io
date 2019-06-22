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
import { Component, Vue } from "vue-property-decorator";
import ListComponent from "@/components/ListComponent.vue";

@Component({
  components: {
    ListComponent
  }
})
export default class Referenzen extends Vue {
  listComponentHeadline: string = "Referenzen";

  listComponentItem: Array<string> = [
    'Frontend Developer bei <a href="https://www.publicispixelpark.de/" title="Publicis Pixelpark" target="_blank" rel="noopener">Publicis Pixelpark</a>',
    'Freie Mitarbeit bei <a href="https://www.co2online.de" title="co2online" target="_blank" rel="noopener">co2online gGmbH</a> als Typo3 Assistenz',
    'Freie Mitarbeit bei <a href="https://www.mentronic.com" title="mentronic" target="_blank" rel="noopener">mentronic Digitale Kommunkation</a>',
    '<a href="https://profiles.stanford.edu/oliver-pietsch" title="Technology Assistant" target="_blank" rel="noopener">Technology Assistant</a> für die Stanford University in Berlin (Bing Overseas Studies Program)',
    'Freie Mitarbeit bei <a href="https://www.blitzrechner.de" title="Blitzrechner" target="_blank" rel="noopener">www.blitzrechner.de</a> und <a href="https://www.blitzresults.com" title="Blitzresults" target="_blank" rel="noopener">www.blitzresults.com</a> als Entwickler',
    'Ausbildung zum Mediengestalter bei <a href="http://www.laborfuergestaltung.de" title="Labor für Gestaltung" target="_blank" rel="noopener">Labor für Gestaltung Schleßelmann GmbH</a>',
    'Technische Umsetzung der Website <a href="http://http://www.laborfuergestaltung.de" title="Labor für Gestaltung" target="_blank" rel="noopener">www.laborfuergestaltung.de</a>'
  ];
}
</script>
