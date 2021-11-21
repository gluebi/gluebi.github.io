<template>
  <div class="not-found">
    <TextComponent :headline="headline" :content="paragraphs"></TextComponent>
  </div>
</template>

<script setup lang="ts">
import TextComponent from "@/components/TextComponent.vue";
import { useStore } from "vuex";
import { key } from "@/store";

const store = useStore(key);
const headline = store.state.notFoundHeadline;
const paragraphs = store.state.notFoundParagraphs;
</script>
