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

<script setup lang="ts">
const props = defineProps<{
  headline: string;
  content: Array<string>;
}>();
</script>

<style scoped>
li {
  font-size: 19px;
}
</style>
