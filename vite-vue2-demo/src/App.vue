<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      <br />
      <el-button type="primary">primary</el-button>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    console.log(window.axios);
    console.log(import.meta.env.VITE_APP_URL);
    this.$api.get(import.meta.env.VITE_APP_URL + 'index.js');
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
