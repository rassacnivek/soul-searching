<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import GlobalLoader from '@/assets/img/global-loader.json'
</script>

<template>
  <div v-motion :initial="{ opacity: 1 }" :enter="{ opacity: 0 }" :delay="1800" id="global-loader">
    <div id="loader">
      <Vue3Lottie autoplay :animation-data="GlobalLoader" />
    </div>
  </div>
</template>

<style lang="scss">
#global-loader {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgb(var(--v-background));
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;

  #loader {
    width: 140px;
    height: 140px;
  }
}
</style>