<template>
  <div>
    <h2 v-if="headline">{{ headline }}</h2>
    <p v-for="(text, index) in content" :key="index">
      <span v-html="text"></span>
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  headline: string;
  content: Array<string>;
}>();
</script>

<style scoped>
p {
  font-size: 19px;
}
</style>
