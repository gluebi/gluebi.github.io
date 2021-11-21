<template>
  <div class="imprint">
    <TextComponent :headline="headline" :content="paragraphs"> </TextComponent>
  </div>
</template>

<script setup lang="ts">
import TextComponent from "@/components/TextComponent.vue";
import { Store, useStore } from "vuex";
import { key, State } from "@/store";

const store: Store<State> = useStore(key);
const headline = store.state.imprintHeadline;
const paragraphs = store.state.imprintParagraphs;
</script>
