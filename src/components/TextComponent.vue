<template>
  <div>
    <h2 v-if="headline">{{ headline }}</h2>
    <p v-for="(text, index) in content" :key="index">
      <span v-html="text"></span>
    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

class Props {
  headline?: string;
  content!: Array<string>;
}

@Options<TextComponent>({
  name: "TextComponent",
})
export default class TextComponent extends Vue.with(Props) {}
</script>

<style scoped>
p {
  font-size: 19px;
}
</style>
