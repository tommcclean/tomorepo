<template>
  <div :class="['c-overlay', { 'c-overlay-fixed' : isFixed }]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Overlay',

  props: {
    isFixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.c-overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1030;
  background: rgba(0, 0, 0, 0.7);
}

.c-overlay--fixed {
  position: fixed;
}
</style>