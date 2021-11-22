<template>
  <header>
    <router-link class="logo" to="/">
      <span class="logo-text">Oliver Pietsch</span>
    </router-link>
    <nav id="nav">
      <router-link
        class="link"
        :key="route.name"
        v-for="route in routes"
        :to="route.path"
      >
        {{ route.name }}
      </router-link>
    </nav>
  </header>
  <router-view class="content" />
</template>

<script lang="ts">
import { RouteRecordRaw, useRouter } from "vue-router";
import { computed } from "vue";

export default {
  setup() {
    const router = useRouter();
    const routes = computed<RouteRecordRaw[]>((): RouteRecordRaw[] =>
      router.getRoutes().filter((route: RouteRecordRaw) => route.meta?.visible)
    );
    return {
      routes,
    };
  },
};
</script>

<style lang="css">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  max-width: 1180px;
}
header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 60px 0;
}
@media screen and (max-width: 600px) {
  header {
    flex-direction: column;
  }
}
.logo {
  color: #2c3e50;
  display: block;
  text-decoration: none;
}
.logo-text {
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
}
#nav {
  text-align: right;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.link {
  padding: 0 10px;
}
.link:last-child {
  padding: 0 0 0 10px;
}
.content {
  width: 100%;
}
</style>
