<template functional>
  <div class="c-tag">
    <slot name="icon" />
    <span v-text="props.text" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'My First Tag'
    }
  }
}
</script>

<style scoped>
.c-tag {
  display: inline-block;
  padding: 10px 20px;
  background-color: black;
  color: white;
  font-size: 0.8rem;
  opacity: 0.8;
  margin-bottom: 5px;
  user-select: none;
}
</style>