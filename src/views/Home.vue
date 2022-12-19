<template>
  <div class="home">
    <TextComponent :headline="headline" :content="paragraphs"></TextComponent>
  </div>
</template>

<script setup lang="ts">
import TextComponent from "../components/TextComponent.vue";
import { Store } from "vuex";
import { State, useStore } from "../store";

const store: Store<State> = useStore();
const headline = store.state.homeHeadline;
const paragraphs = store.state.homeParagraphs;
</script>
