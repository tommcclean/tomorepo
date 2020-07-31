<template>
  <p
    v-text="time"
    class="c-clock" />
</template>

<script>
export default {
  data () {
    return {
      time: ''
    }
  },

  created () {
    this.updateClock();
  },

  methods: {
    updateClock () {
        let currentHours = new Date().getHours();
        let currentMinutes = new Date().getMinutes();

        currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;

        this.time = `${currentHours}:${currentMinutes}`
    }
  }
}
</script>

<style scoped>
.c-clock {
  font-size: 1rem;
  padding: 0 15px;
}
</style>