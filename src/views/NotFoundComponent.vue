<template>
  <div class="not-found">
    <TextComponent :headline="headline" :content="paragraphs"></TextComponent>
  </div>
</template>

<script setup lang="ts">
import TextComponent from "../components/TextComponent.vue";
import { Store } from "vuex";
import { key, State, useStore } from "../store";

const store: Store<State> = useStore();
const headline = store.state.notFoundHeadline;
const paragraphs = store.state.notFoundParagraphs;
</script>
