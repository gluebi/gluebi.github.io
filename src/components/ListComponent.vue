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
import { Options, Vue } from "vue-class-component";

class Props {
  headline?: string;
  content!: Array<string>;
}

@Options<ListComponent>({
  name: "ListComponent"
})
export default class ListComponent extends Vue.with(Props) {}
</script>

<style scoped>
li {
  font-size: 19px;
}
</style>
