<template>
  <div class="home">
    <TextComponent :headline="headline" :content="paragraphs"></TextComponent>
  </div>
</template>

<script setup lang="ts">
import TextComponent from "@/components/TextComponent.vue";
import { Store, useStore } from "vuex";
import { key, State } from "../store";

const store: Store<State> = useStore(key);
const headline = store.state.homeHeadline;
const paragraphs = store.state.homeParagraphs;
</script>
