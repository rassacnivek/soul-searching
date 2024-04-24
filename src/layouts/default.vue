<script setup>
import AppHeader from '@/components/Header/AppHeader.vue';
import GlobalLoader from '@/components/Global/GlobalLoader.vue';

const isLoaderVisible = ref(true);

setTimeout(() => isLoaderVisible.value = false, 2200);
</script>

<template>
  <VApp>
    <GlobalLoader v-if="isLoaderVisible" />
    <AppHeader v-if="!isLoaderVisible" />

    <VMain v-if="!isLoaderVisible">
      <router-view />
    </VMain>
  </VApp>
</template>


<style lang="scss">
@font-face {
  font-family: "glorifylight";
  src: url("../src/assets/fonts/glorify_light.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap
}

@font-face {
  font-family: "glorifyregular";
  src: url("../assets/fonts/glorify_regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap
}

@font-face {
  font-family: "satoshilight";
  src: url("../assets/fonts/satoshi_light.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap
}

@font-face {
  font-family: "satoshiregular";
  src: url("../assets/fonts/satoshi_regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap
}

@font-face {
  font-family: "satoshimedium";
  src: url("../assets/fonts/satoshi_medium.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap
}

@font-face {
  font-family: "satoshibold";
  src: url("../assets/fonts/satoshi_bold.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap
}

@keyframes spin {
  100% {
    transform: rotate(360deg)
  }
}

@keyframes menubgmoving {
  0% {
    background-position: center bottom
  }

  50% {
    background-position: center top
  }

  100% {
    background-position: center bottom
  }
}

@keyframes menubgmovingback {
  0% {
    background-position: center top
  }

  50% {
    background-position: center bottom
  }

  100% {
    background-position: center top
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 153, 0, .4)
  }

  70% {
    box-shadow: 0 0 0 45px rgba(255, 153, 0, 0)
  }

  100% {
    box-shadow: 0 0 0 0 rgba(255, 99, 0, 0)
  }
}

html,
body {
  height: 100%;
  width: 100%;
}

html {
  scroll-behavior: smooth
}

body {
  font-family: "satoshiregular";
}

button,
button:focus {
  outline: none
}

*,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box
}

.desktop {
  display: none !important
}

@media(min-width: 992px) {
  .mobile {
    display: none !important
  }

  .desktop {
    display: block !important
  }
}

.text_wrap {
  padding: 20px 48px;

  .text {
    font-family: "satoshiregular";
    font-size: 20px;
    line-height: 44px;
    letter-spacing: -0.02em;

    &:not(:last-child) {
      padding-bottom: 32px;
    }
  }
}

.bold {
  font-family: "satoshimedium" !important;
}

.light {
  font-family: "satoshilight" !important;
}
</style>
