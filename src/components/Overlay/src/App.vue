<template>
  <div id="app">
    <Overlay />
  </div>
</template>

<script>
import Overlay from './Overlay.vue'

export default {
  name: 'App',
  components: {
    Overlay
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
