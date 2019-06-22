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
    'Frontend Developer bei <a href="https://www.publicispixelpark.de/" title="Publicis Pixelpark" target="_blank">Publicis Pixelpark</a>',
    'reie Mitarbeit bei <a href="https://www.co2online.de" target="_blank">co2online gGmbH</a> als <a href="https://www.co2online.de/ueber-uns/team/dialog/#c100089" target="_blank">Typo3 Assistenz</a>',
    'Freie Mitarbeit bei <a href="https://www.mentronic.com" target="_blank">mentronic Digitale Kommunkation</a>',
    '<a href="https://profiles.stanford.edu/oliver-pietsch" target="_blank">Technology Assistant</a> für die Stanford University&nbsp;in Berlin (Bing Overseas Studies Program)',
    'Freie Mitarbeit bei <a href="https://www.blitzrechner.de" target="_blank">www.blitzrechner.de</a> und <a href="https://www.blitzresults.com" target="_blank">www.blitzresults.com</a> als Entwickler',
    'Ausbildung zum Mediengestalter bei <a href="http://www.laborfuergestaltung.de" target="_blank">Labor für Gestaltung Schleßelmann GmbH</a>',
    'Technische Umsetzung der Website <a href="http://http://www.laborfuergestaltung.de" target="_blank">www.laborfuergestaltung.de</a>'
  ];
}
</script>
