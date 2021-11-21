<template>
  <div class="references">
    <ListComponent :headline="headline" :content="paragraphs"> </ListComponent>
  </div>
</template>

<script setup lang="ts">
import ListComponent from "../components/ListComponent.vue";
import { Store, useStore } from "vuex";
import { key, State } from "../store";

const store: Store<State> = useStore(key);
const headline = store.state.referencesHeadline;
const paragraphs = store.state.references;
</script>
