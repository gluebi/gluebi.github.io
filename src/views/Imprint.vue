<template>
  <div class="impressum">
    <TextComponent
      :headline="textComponentHeadline"
      :content="textComponentItem"
    >
    </TextComponent>
  </div>
</template>

<script setup lang="ts">
import TextComponent from "@/components/TextComponent.vue";

const textComponentHeadline: string = "Imprint";
const textComponentItem: Array<string> = [
  "Oliver Pietsch<br> Müllerstr. 142<br> 13353&nbsp;Berlin<br> Mail: kontakt @ oliver-pietsch.de",
];
</script>
