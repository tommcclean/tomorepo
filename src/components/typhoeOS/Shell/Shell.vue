<template>
  <div class="c-shell">
    <Taskbar />
    <Desktop />
  </div>
</template>

<script>
import Taskbar from '../Taskbar/Taskbar.vue'
import Desktop from '../Desktop/Desktop.vue'

export default {
  components: {
    Taskbar,
    Desktop,
  }
}
</script>
