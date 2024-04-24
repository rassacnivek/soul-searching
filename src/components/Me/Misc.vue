<script setup>
import BasicText from '@/components/Global/BasicText.vue';

const initialOptions = { opacity: 0, y: 100 };
const getEnterOptions = (i) => ({ opacity: 1, y: 0, transition: { type: 'spring', stiffness: '100', delay: 100 * i } });
const texts = [
  {
    text: 'Here is a summary of the technologies I am familiar with :',
    delay: 8,
  },
  {
    text: 'Frontend',
    delay: 9,
    class: 'bold',
  },
  {
    text: 'VueJS 2 & 3 (Options & Composition API), React, JQuery',
    delay: 10,
  },
  {
    text: 'Backend',
    delay: 11,
    class: 'bold',
  },
  {
    text: 'PHP 8, Laravel 10, Symfony, Node',
    delay: 12,
  },
  {
    text: 'Database',
    delay: 13,
    class: 'bold',
  },
  {
    text: 'MySQL, PostgreSQL',
    delay: 14,
  },
  {
    text: 'Self formation',
    delay: 15,
    class: 'bold',
  },
  {
    text: 'Basics of Python, Angular & Flutter',
    delay: 16,
  },
];
</script>

<template>
  <VContainer>
    <section id="misc">
      <div class="text_wrap">
        <BasicText v-for="text in texts" :key="text.delay"
          :class="`text ${text.hasOwnProperty('class') ? text.class : ''}`" :initial="initialOptions"
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