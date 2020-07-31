<template>
  <div class="c-activity">
    <iframe
      :src="activityUrl"
      :title="activityTitle"></iframe>
  </div>
</template>

<script>
export default {
  props: {
    activityUrl: {
      type: String,
      required: true
    },
    activityTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.c-activity {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.c-activity-titleBar p {
  margin: 0;
}

.c-activity iframe {
  width: 100%;
  height: 100%;
}
</style>