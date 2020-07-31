<template>
  <div class="c-pane c-pane--flex">
    <img
      v-show="icon"
      class="c-pane-icon"
      :src="icon"
      width="24"
      height="24">
    <p
      v-text="text" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.c-pane {
  float: left;;
  background-color: #CFD0D1;
  padding: 0 15px;
  border: 2px solid #DBDEE0;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
}

.c-pane--flex {
  display: flex;
  align-items: center;
}

.c-pane:hover {
  background-color: #C9C9C9;
  border: 2px solid #C9C9C9;
}

.c-pane-icon {
  margin-right: 5px;
}
</style>
