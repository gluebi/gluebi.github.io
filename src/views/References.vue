<template>
  <div class="references">
    <ListComponent :headline="headline" :content="paragraphs"> </ListComponent>
  </div>
</template>

<script setup lang="ts">
import ListComponent from "../components/ListComponent.vue";
import { Store } from "vuex";
import { State, useStore } from "../store";

const store: Store<State> = useStore();
const headline = store.state.referencesHeadline;
const paragraphs = store.state.references;
</script>
