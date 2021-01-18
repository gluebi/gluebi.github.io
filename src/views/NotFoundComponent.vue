<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <span>404</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Not Found"
})
export default class NotFoundComponent extends Vue {}
</script>
