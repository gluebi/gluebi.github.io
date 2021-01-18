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
import { Options, Vue } from "vue-class-component";
import TextComponent from "@/components/TextComponent.vue";

@Options({
  name: "Impressum",
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
