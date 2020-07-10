<template>
  <label class="c-input">
    <p
      class="c-input-label"
      v-text="label" />

    <component
      v-bind:is="fieldType"
      :required="isRequired"
      :value="model"
      :type="type"
      @input="$emit('input', $event.target.value)" />
  </label>
</template>

<script>
export default {
  props: {
    fieldType: {
      type: String,
      default: 'input'
    },

    label: {
      type: String,
      required: true
    },

    model: {
      type: String,
      default: ''
    },

    isRequired: {
      type: Boolean,
      default: false
    },

    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style scoped>
.c-input {
  display: block;
  padding: 10px 10px 10px 0;
}

.c-input-label {
  margin: 0 10px 5px 0;
}

.c-input input {
  width: calc(100% - 30px);
  padding: 15px;
  background-color: #EDEDED;
  outline: none;
  border: 1px solid white;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
}

.c-input input:hover, .c-input input:active {
  border: 1px solid #E2E2E2;
}

.c-input textarea {
  min-height: 50px;
  width: calc(100% - 30px);
  padding: 15px;
  background-color: #EDEDED;
  outline: none;
  border: 1px solid white;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
}

.c-input textarea:hover, .c-input textarea:active {
  border: 1px solid #E2E2E2;
}
</style>