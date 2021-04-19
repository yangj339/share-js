<template>
  <HelloWorld msg="share page" />
  <!-- <Login /> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Login from './views/Login.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    // Login
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
