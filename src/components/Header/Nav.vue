<script setup>
import ContactMe from '../Global/ContactMe.vue';
import MenuLink from '../Global/MenuLink.vue';
import SocialLink from '../Global/SocialLink.vue';
import { links, socials } from '@/assets/json/nav/nav.json'
</script>

<template>
  <nav class="nav">
    <div class="nav__content">
      <section class="main_menu d-flex flex-column justify-space-between align-flex-start">
        <div class="menu_link_wrap">
          <ul class="menu_links">
            <MenuLink v-for="link in links" :key="link.href" :href="link.href" :label="link.label" />
          </ul>
          <ContactMe />
        </div>
        <div class="menu_footer">
          <SocialLink v-for="social in socials" :key="social.href" :href="social.href" :mobile="social.mobile"
            :desktop="social.desktop" />
          <div class="crafted">Crafted with ❤️ by Kévin Cassar</div>
        </div>
      </section>
    </div>
  </nav>
</template>

<style lang="scss">
.nav {
  position: fixed;
  z-index: 9998;

  &:before,
  &:after {
    content: "";
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: url("../../assets/img/menu_shadow.png") no-repeat left bottom;
    background-size: cover;
    z-index: -1;
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
    transform: translateX(0%) translateY(-100%);
  }

  &:before {
    transition-delay: .1s;
  }

  &:after {
    transition-delay: 0s;
    background: rgb(var(--v-black));
    background-size: 100%;
  }

  .nav__content {
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    position: fixed;
    top: 0%;
    width: 100%;
    text-align: center;
    font-weight: 200;

    &:before,
    &:after {
      opacity: 0;
      visibility: hidden;
      transition: all .3s ease;
      transition-delay: 150ms;
    }

    &:before {
      position: absolute;
      content: "";
      width: 150px;
      height: 100%;
      right: 175px;
      top: 0;
      background: url("../../assets/img/menu_scroll.webp") no-repeat center bottom;
      background-size: cover;
      animation: menubgmovingback 200s linear infinite;
      transition: all .3s ease;
      transition-delay: 550ms;
    }

    &:after {
      position: absolute;
      content: "";
      width: 150px;
      height: 100%;
      right: 0;
      top: 0;
      background: url("../../assets/img/menu_scroll_2.webp") no-repeat center bottom;
      background-size: cover;
      animation: menubgmoving 200s linear infinite;
      transition: all .3s ease;
      transition-delay: 550ms;
    }
  }

  .nav__list-item {
    position: relative;
    display: inline-block;
    transition-delay: 0.8s;
    opacity: 0;
    transform: translate(0%, 100%);
    transition: opacity .2s ease, transform .3s ease;
    margin-right: 25px;

    &:before {
      content: "";
      position: absolute;
      background: #000;
      width: 20px;
      height: 1px;
      top: 100%;
      transform: translate(0%, 0%);
      transition: all .3s ease;
      z-index: -1;
    }

    &:hover:before {
      width: 100%;
    }
  }
}

.main_menu {
  opacity: 0;
  height: 0;
  visibility: hidden;
  transition-delay: 250ms;

  .menu_link_wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 50px;

    .contact-btn {
      opacity: 0;
      visibility: hidden;
      transition: all .3s ease;
      transition-delay: 550ms;
      margin: 0 auto;
      transform: scale(1.2);
    }
  }

  .menu_links {
    text-align: left;
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: "glorifyregular";
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease;
    transition-delay: 550ms;

    li {
      position: relative;

      a:after {
        width: 0%;
        height: 2px;
        opacity: 0;
        visibility: hidden;
        content: "";
        left: 0;
        bottom: 0;
        position: absolute;
        transition: all .3s ease;
        border-radius: 8px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        -khtml-border-radius: 8px;
        background: linear-gradient(to right, rgb(var(--v-lightorange)), rgb(var(--v-yellow)), rgb(var(--v-orange)), rgb(var(--v-lightorange)));
      }

      &.active a:after {
        width: 100%;
        height: 4px;
        content: "";
        left: 0;
        bottom: 28px;
        opacity: 100%;
        visibility: visible;
        position: absolute;
        z-index: 1;
        transition: all .3s ease;
        border-radius: 8px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        -khtml-border-radius: 8px;
        background: linear-gradient(to right, rgb(var(--v-lightorange)), rgb(var(--v-yellow)), rgb(var(--v-orange)), rgb(var(--v-lightorange)));
      }
    }

    a {
      text-decoration: none;
      display: inline-block;
      padding: 24px 0 8px;
      position: relative;
      color: rgb(var(--v-white));
      font-weight: 400;
      font-size: 40px;
      line-height: 40px;
      position: relative;
      z-index: 1;
      margin-bottom: 20px;
      transition: all .3s ease;
      border-radius: 100px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
      -khtml-border-radius: 100px;
      text-transform: uppercase;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.menu_footer {
  width: 100%;
  position: relative;
  bottom: 0;
  border-top: solid 1px rgba(255, 255, 255, .2);
  z-index: 1;
  display: flex;
  gap: 50px;

  .crafted {
    margin-left: auto;
    font-size: 18px;
    color: rgb(var(--v-white));
    font-family: "satoshimedium";
    position: relative;
    padding-right: 40px;
    visibility: hidden;

    img {
      position: absolute;
      top: -2px;
      right: 5px;
    }
  }
}

@media screen and (min-width: 768px) {
  .nav {
    .nav__content {
      &:before {
        width: 240px;
        right: 360px
      }

      &:after {
        width: 240px;
        right: 60px;
      }
    }
  }

  .main_menu .menu_links {
    a {
      font-size: 64px;
      line-height: 72px;
      padding: 32px 0 0 0;
    }

    li.active a:after {
      bottom: 36px;
    }
  }
}

@media screen and (min-width: 992px) {
  .nav {
    .nav__content {
      &:before {
        width: 320px;
        right: 560px
      }

      &:after {
        width: 320px;
        right: 120px;
      }
    }
  }

  .main_menu {
    .menu_links {
      padding-left: 100px;

      li {
        &.active a:after {
          bottom: 36px;
        }

        &:hover a:after {
          width: 100%;
          opacity: 1;
          visibility: visible;
        }
      }

      a {
        padding: 16px 0 0 0;
      }
    }

    .menu_link_wrap {
      .contact-text {
        filter: invert(1);
      }
    }
  }

  .menu_footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .desktop {
      padding-right: 5px;

      &:hover {
        background-position: 0%;
      }
    }

    .crafted {
      visibility: visible;
    }
  }
}

@media screen and (min-width: 1080px) {
  .main_menu .menu_links {
    padding-left: 120px;
  }
}

@media screen and (min-width: 1400px) {
  .main_menu {
    .menu_links {
      padding-left: 140px;
    }
  }
}

@media screen and (min-width: 1600px) {
  .nav {
    .nav__content {
      &:before {
        width: 400px;
        right: 800px
      }

      &:after {
        width: 400px;
        right: 270px;
      }
    }
  }

  .main_menu {
    .menu_links {
      padding-left: 160px;

      a {
        font-size: 80px;
        line-height: 84px;
        padding: 24px 0 0 0;
      }

      li.active a:after {
        bottom: 44px;
      }
    }
  }

  .menu_footer .desktop {
    font-size: 20px;
  }
}
</style>