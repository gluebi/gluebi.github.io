<template>
  <div>
    <h2 v-if="headline">{{ headline }}</h2>
    <ul>
      <li v-for="(listItem, index) in content" :key="index">
        <span v-html="listItem"></span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "TextComponent"
})
export default class ListComponent extends Vue {
  @Prop() headline?: string;
  @Prop() content!: Array<string>;
}
</script>

<style scoped>
li {
  font-size: 19px;
}
</style>
