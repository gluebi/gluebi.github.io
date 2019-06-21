<template>
  <div id="app">
    <header>
      <router-link class="logo" to="/"
        ><span class="logo-text">Oliver Pietsch</span></router-link
      >
      <div id="nav">
        <router-link class="link" to="/">Home</router-link> |
        <router-link class="link" to="/about">About</router-link>
      </div>
    </header>
    <router-view class="content" />
  </div>
</template>

<style>
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
  padding: 60px 0;
}
.logo {
  color: #2c3e50;
  display: block;
  flex-basis: 30%;
  text-decoration: none;
}
.logo-text {
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
}
#nav {
  flex-basis: 60%;
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
