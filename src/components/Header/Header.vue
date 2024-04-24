<script setup>
import { useNavStore } from '@/stores/navbar';

const { toggleNavState } = useNavStore();
</script>

<template>
  <header id="header" class="headerMenu first activate">
    <div class="header__logo">
      <button class="menu menu-icon" @click="toggleNavState">
        <span class="menu-icon__line menu-icon__line-top"></span>
        <span class="menu-icon__line menu-icon__line-bottom"></span>
      </button>
    </div>
  </header>
</template>


<style lang="scss">
.headerMenu {
  width: 32px;
  height: 32px;
  position: fixed;
  top: 32px;
  right: 32px;
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all .3s ease;

  &.activate {
    opacity: 1;
    visibility: visible;
  }

  .header__logo {
    .menu-icon__line {
      background-color: rgb(var(--v-black));
    }
  }

  .menu {
    width: 32px;
    height: 32px;
    background: rgba(0, 0, 0, 0);
    border: none;
    cursor: pointer;
    flex-direction: column;
    position: relative;
    filter: invert(0);
    transition: all .3s ease;

    span {
      width: 28px;
      height: 3px;
      display: block;
      border-radius: 8px;
      -webkit-border-radius: 8px;
      -moz-border-radius: 8px;
      -khtml-border-radius: 8px;
      position: absolute;
      transition: all .3s ease;

      &.menu-icon__line-top {
        top: 9px;
        left: 2px;
      }

      &.menu-icon__line-bottom {
        top: 18px;
        left: 2px;
      }

      &.invert {
        filter: invert(1);
      }
    }

    &-icon {
      cursor: pointer;
      text-indent: -9999px;

      &.opacity {
        opacity: 0;
      }

      &__line {
        display: block;
        background-color: rgb(var(--v-white));
        transition: transform .2s ease, background-color .5s ease;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .headerMenu {
    top: 40px;
    right: 40px;
  }
}

@media screen and (min-width: 992px) {
  .headerMenu {
    top: 48px;
    right: 48px;
  }
}

@media screen and (min-width: 1600px) {
  .headerMenu {
    top: 60px;
    right: 60px;
  }
}
</style>