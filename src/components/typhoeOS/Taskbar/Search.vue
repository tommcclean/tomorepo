<template>
  <div class="c-search">
    <div
      @click="show = !show"
      class="c-search-icon">
      <img
        width="28"
        height="28"
        src="../_images/search.webp">
    </div>

    <div
      v-show="show"
      class="c-search-pane">
      <h1>Search</h1>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
.c-search {
  display: inline-block;
}

.c-search-icon {
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;
  padding: 10px;
  cursor: pointer;
}

.c-search-icon img {
  width: 28px;
  height: 28px;
  color: black;
}

.c-search-icon:hover {
  background-color: #C0C2C4;
}

.c-search-pane {
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  padding: 30px;
  background-color: white;
  border-bottom: 1px solid red;
}
</style>
