<template>
  <div class="c-applications">
    <div class="c-applications-icon">
      <img
        width="28"
        height="28"
        src="../_images/hamburger.webp">
    </div>
  </div>
</template>

<style scoped>
.c-applications {
  display: inline-block;
}

.c-applications-icon {
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;
  padding: 10px;
  cursor: pointer;
}

.c-applications-icon img {
  width: 28px;
  height: 28px;
  color: black;
}

.c-applications-icon:hover {
  background-color: #C0C2C4;
}
</style>
