<template>
  <div
    :class="['c-spoiler', { 'c-spoiler--light' : isLight }]"
    @click="toggleResult">
    <div class="c-spoiler-heading">
      <p
        v-text="title" />
      <img
        v-if="isLight"
        src="./chevron-dark.png">
      <img
        v-else
        src="./chevron.png">
    </div>

    <div
      v-show="showResult"
      class="c-spoiler-result">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLight: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Click me to show hidden content'
    }
  },
  data () {
    return {
      showResult: false
    }
  },
  methods: {
    toggleResult () {
      this.showResult = !this.showResult
    }
  }
}
</script>

<style scoped>
.c-spoiler {
  padding: 2.5px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  width: 800px;
  max-width: 95%;
  margin: 0 auto;
  margin-bottom: 10px;
}

.c-spoiler--light {
  background-color: white;
  color: black;
  border: 1px solid black;
}

.c-spoiler-heading {
  display: flex;
  align-items: center;
}

.c-spoiler-heading p {
  flex-grow: 1;
}

.c-spoiler-heading img {
  width: 16px;
  height: 16px;
}

.c-spoiler-result {
  border-top: 0.5px solid white;
}

.c-spoiler--light .c-spoiler-result {
  border-top: 0.5px solid black;
}
</style>