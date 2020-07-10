<template>
  <div class="c-jumbotron">
    <div :class="['c-jumbotron-container', { 'c-jumbotron-container--tall' : isTaller }]">
      <div
        class="c-jumbotron-image" 
        :style="`background-image: url('${imageUrl}')`" />

      <overlay>
        <div class="c-jumbotron-inner">
          <div class="c-jumbotron-content">
            <slot />
          </div>
        </div>
      </overlay>
    </div>
  </div>
</template>

<script>
import Overlay from '../Overlay/Overlay'
export default {
  components: {
    Overlay
  },

  props: {
    isTaller: {
      type: Boolean,
      default: false
    },

    imageUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.c-jumbotron {
  position: relative;
  color: white;
}

.c-jumbotron-container {
  position: relative;
  height: 50vh;
}

.c-jumbotron-container--tall {
  height: 75vh;
}

.c-jumbotron-image {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center center;
}

.c-jumbotron-inner {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
}

.c-jumbotron-content {
  width: 800px;
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
}
</style>