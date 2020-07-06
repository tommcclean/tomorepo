<template>
  <div id="app">
    <editable-element
      element="h1"
      text="This is an editable element"
      @component-updated="updateElement" />
  </div>
</template>

<script>
import EditableElement from './EditableElement.vue'

export default {
  name: 'App',
  components: {
    EditableElement
  },
  methods: {
    updateElement (newValue) {
      alert(`Content Updated to: ${newValue}`)
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
