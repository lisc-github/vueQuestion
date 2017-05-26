<template>
  <div id="app">
    <header>
    <!-- router-link 定义点击后导航到哪个路径下 -->
    <router-link to="/hello">Hello</router-link>
    <router-link to="/second">Second</router-link>
    <router-link to="/question">Question</router-link>
  </header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
