<script setup>
const props = defineProps({
  href: { type: String, required: true },
  mobile: { type: String, required: true },
  desktop: { type: String, required: true },
});
</script>

<template>
  <div class="social">
    <a :href="props.href" target="_blank" class="mobile">{{ props.mobile }}</a>
    <a :href="props.href" target="_blank" class="desktop">{{ props.desktop }}</a>
  </div>
</template>

<style lang="scss">
.social {
  width: 100%;
  padding: 40px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1px;
    color: rgb(var(--v-white));
    font-family: "satoshibold";
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    background-image: linear-gradient(to right, rgb(var(--v-yellow)), rgb(var(--v-yellow)) 50%, rgb(var(--v-white)) 50%);
    background-size: 200% 100%;
    background-position: 100%;
    transition: all .3s ease;
  }
}

@media screen and (min-width: 992px) {
  .social {
    width: auto;
    gap: 24px;
    padding: 48px 5px;

    a {
      font-size: 14px;
      line-height: 20px;
    }
  }
}

@media screen and (min-width: 1400px) {
  .social a:hover {
    background-position: 0%
  }
}

@media screen and (min-width: 1600px) {
  .social a {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>