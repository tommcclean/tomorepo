<template>
  <div id="app">
    <square-button
      text="Square Button"
      :execute="clicked"
      type="button" />
  </div>
</template>

<script>
import SquareButton from './SquareButton.vue'

export default {
  name: 'App',
  components: {
    SquareButton
  },
  methods: {
    clicked () {
      alert('Clicked')
    }
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
