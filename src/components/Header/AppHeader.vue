<script setup>
import Header from './Header.vue';
import Nav from './Nav.vue';
import { storeToRefs } from 'pinia';
import { useNavStore } from '@/stores/navbar';

const { isNavActive } = storeToRefs(useNavStore());
</script>

<template>
  <div :class="isNavActive ? 'nav-active' : ''">
    <Nav />
    <Header />
  </div>
</template>

<style lang="scss">
.nav-active {
  .header {
    position: fixed;

    .logo {
      img {
        filter: invert(1);
      }
    }
  }

  .nav {
    visibility: visible;

    &:before,
    &:after {
      transform: translateX(0%) translateY(0%);
      transform: translateX(0%) translateY(0%);
    }

    &:before {
      transition-delay: 0s;
    }

    &:after {
      transition-delay: .1s;
    }

    &__list-item {
      opacity: 1;
      transform: translateX(0%);
      transition: opacity .3s ease, transform .3s ease, color .3s ease;
    }

    &__content {
      opacity: 1;
      visibility: visible;

      &:before,
      &:after {
        opacity: .2;
        height: 100%;
        visibility: visible;
      }
    }
  }

  .main_menu {
    opacity: 1;
    visibility: visible;
    height: 100vh;
    padding: 36px;
    padding-bottom: 0;

    .logo {
      width: 144px;

      img {
        max-width: 100%;
      }
    }

    .menu_links {
      opacity: 1;
      visibility: visible;
    }
  }

  .menu {
    &-icon__line {
      background-color: rgb(var(--v-white)) !important;

      &-top {
        transform: translateY(5px) rotate(45deg);
      }

      &-bottom {
        transform: translateY(-4px) rotate(-45deg);
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .nav-active {
    .main_menu {
      padding: 40px;
      padding-bottom: 0;

      .logo {
        width: 160px;
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .nav-active {
    .main_menu {
      padding: 48px;
      padding-bottom: 0;

      .logo {
        width: 160px;
      }

      .contact-btn {
        opacity: 1;
        visibility: visible;
      }
    }
  }
}

@media screen and (min-width: 1600px) {
  .nav-active {
    .main_menu {
      padding: 60px;
      padding-bottom: 0;
    }
  }
}
</style>