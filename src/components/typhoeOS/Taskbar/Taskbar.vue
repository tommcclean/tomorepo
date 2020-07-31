<template>
  <div class="c-taskbar">
    <div class="c-taskbar-left">
      <search />
      <applications />
    </div>
    <div class="c-taskbar-centre">
      <pane icon="https://twitter.com/favicon.ico" text="Twitter" />
      <pane icon="https://facebook.com/favicon.ico" text="Facebook" />
    </div>
    <div class="c-taskbar-right">
      <clock />
    </div>
  </div>
</template>

<script>
import Search from './Search.vue';
import Applications from './Applications.vue';
import Clock from './Clock.vue';
import Pane from './Pane.vue'

export default {
  components: {
    Search,
    Applications,
    Clock,
    Pane
  }
}
</script>

<style scoped>
.c-taskbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  background-color: #DBDEE0;
  z-index: 10;
}

.c-taskbar-centre {
  flex-grow: 1;
  padding: 0 20px;
}
</style>