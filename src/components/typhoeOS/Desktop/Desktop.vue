<template>
  <div class="c-desktop">
    <Activity
      v-if="showActivity"
      activity-url="https://www.tommcclean.me"
      activity-title="Thomas William McClean" />
  </div>
</template>

<script>
import Activity from '../Activity/Activity.vue'

export default {
  components: {
    Activity
  },
  props: {
    showActivity: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.c-desktop {
  position: fixed;
  top: 54px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-image: url('../_images/default.jpg');
  background-size: cover;
  background-position: center center;
}
</style>