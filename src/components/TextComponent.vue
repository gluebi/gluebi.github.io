<template>
  <div>
    <p v-for="(text, index) in content" :key="index">
      <span v-html="text"></span>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "TextComponent"
})
export default class TextComponent extends Vue {
  @Prop() content!: Array<string>;
}
</script>

<style scoped></style>
