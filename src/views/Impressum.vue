<template>
  <div class="impressum">
    <TextComponent
      :headline="textComponentHeadline"
      :content="textComponentItem"
    >
    </TextComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TextComponent from "@/components/TextComponent.vue";

@Component({
  components: {
    TextComponent
  }
})
export default class Impressum extends Vue {
  textComponentHeadline: string = "Impressum";

  textComponentItem: Array<string> = [
    "Oliver Pietsch<br> Müllerstr. 142<br> 13353&nbsp;Berlin<br> Mail: kontakt @ oliver-pietsch.de"
  ];
}
</script>
