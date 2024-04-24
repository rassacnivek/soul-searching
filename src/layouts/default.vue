<script setup>
import AppHeader from '@/components/Header/AppHeader.vue';
import GlobalLoader from '@/components/Global/GlobalLoader.vue';

const isLoaderVisible = ref(true);

setTimeout(() => isLoaderVisible.value = false, 2200)
</script>

<template>
  <VApp>
    <GlobalLoader v-if="isLoaderVisible" />
    <AppHeader v-if="!isLoaderVisible"/>

    <VMain v-if="!isLoaderVisible">
      <router-view/>
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
  font-family: "glorifymedium";
  src: url("../assets/fonts/glorify_medium.woff2") format("woff2");
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

@keyframes line {
  0% {
    width: 0
  }

  100% {
    width: 100%
  }
}

@keyframes reavel {
  100% {
    margin-top: 0
  }
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0)
  }

  40% {
    transform: translateY(-30px)
  }

  60% {
    transform: translateY(-15px)
  }
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0)
  }
}

@keyframes fade-in-anim {
  100% {
    width: 85px;
    opacity: 1;
    filter: blur(0)
  }
}

@keyframes animateCloud {
  0% {
    left: 80%
  }

  100% {
    left: -10%
  }
}

@keyframes animateCloud2 {
  0% {
    left: 20%;
    opacity: 1
  }

  90% {
    left: 0%;
    opacity: 1
  }

  100% {
    left: -10%;
    opacity: 0
  }
}

@keyframes animateCloud3 {
  0% {
    left: 50%;
    opacity: 1
  }

  90% {
    left: 0%;
    opacity: 1
  }

  100% {
    left: -10%;
    opacity: 0
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

@keyframes mouse {
  from {
    opacity: 1;
    top: 7px
  }

  to {
    opacity: 0;
    top: 15px
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

@keyframes reveal {
  0% {
    transform: translate(0, 100%)
  }

  100% {
    transform: translate(0, 0)
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0
}

input[type=number] {
  appearance: textfield;
  -moz-appearance: textfield;
}

body {
  font-family: "satoshiregular";
}

html,
body {
  height: 100%;
  width: 100%;
}

html {
  scroll-behavior: smooth
}

input,
button,
input:focus,
button:focus {
  outline: none
}

*,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box
}

input,
button,
input:focus,
button:focus {
  outline: none
}

.text-center {
  text-align: center
}

.container {
  padding: 0 32px;
  margin: 0 auto;
  width: 100%
}

@media(min-width: 768px) {
  .container {
    padding: 0 72px
  }
}

@media(min-width: 834px) {
  .container {
    padding: 0 72px
  }
}

@media(min-width: 992px) {
  .container {
    max-width: 840px;
    padding: 0
  }
}

@media(min-width: 1080px) {
  .container {
    max-width: 960px;
    padding: 0
  }
}

@media(min-width: 1400px) {
  .container {
    max-width: 1080px
  }
}

@media(min-width: 1600px) {
  .container {
    max-width: 1360px;
    padding: 0
  }
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

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
}

.js-replace--reverse {
  .menu-icon__line {
    background-color: rgb(var(--v-black));
  }

  .js-replace__item {
    transform: translateY(calc(var(--replace-offset-2) * 1));
  }

  .js-replace__content {
    transform: translateY(calc(var(--replace-offset-2) * -1));
  }

  .js-replace__item--active {
    transform: translateY(calc(var(--replace-offset) * 1));

    .js-replace__content {
      transform: translateY(calc(var(--replace-offset) * -1));
    }
  }
}

.js-replace__item {
  transform: translateY(calc(var(--replace-offset) * 1));
}

.js-replace__content {
  border: 1px solid rgba(0, 0, 0, 0);
  will-change: transform;
  transform: translateY(calc(var(--replace-offset) * -1));
}

.js-replace__item--active {
  transform: translateY(calc(var(--replace-offset-2) * 1));

  .js-replace__content {
    transform: translateY(calc(var(--replace-offset-2) * -1));
  }
}
</style>
