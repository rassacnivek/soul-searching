<script setup>
import BasicText from '@/components/Global/BasicText.vue';
import miscTexts from '@/assets/json/me/misc.json';
import initialOptions from '@/assets/json/motion/initialOptions.json';
import enterOptions from '@/assets/json/motion/enterOptions.json';

const getEnterOptions = (i) => ({
  ...enterOptions.basic,
  transition: {
    ...enterOptions.basic.transition,
    delay: 100 * i,
  }
});
</script>

<template>
  <VContainer>
    <section id="misc">
      <div class="text_wrap">
        <BasicText v-for="text in miscTexts" :key="text.delay"
          :class="`text ${text.hasOwnProperty('class') ? text.class : ''}`" :initial="initialOptions.basic"
          :enter="getEnterOptions(text.delay)" :text="text.text" />
      </div>
    </section>
  </VContainer>
</template>

<style lang="scss">
#misc .text_wrap .text.bold {
  padding-bottom: 0px;
}
</style>