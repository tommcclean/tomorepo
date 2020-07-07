<template functional>
  <button
    class="c-button"
    :type="props.type"
    :class="[
      { 'u-primary': props.isPrimary },
      { 'c-button-white' : props.isWhite }
    ]"
    @click="props.execute">
    <span
      v-text="props.text" />
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Submit'
    },
    isPrimary: {
      type: Boolean,
      default: false
    },
    isWhite: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'submit'
    },
    execute: {
      type: Function,
      default: () => { }
    }
  }
}
</script>

<style scoped>
.c-button {
  display: inline-block;
  padding: 15px 20px;
  background-color: #EDEDED;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid white;
}

.c-button:hover {
  border: 1px solid #EDEDED;
}

.c-button.u-primary {
  background-color: #003FBA;
  color: white;
}

.c-button.u-primary:hover {
  border: 1px solid #003FBA;
}

.c-button.c-button-white {
  background-color: white;
  border: 1px solid #EDEDED;
}

.c-button.c-button-white:hover {
  border: 1px solid white;
}
</style>