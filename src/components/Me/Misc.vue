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
      <div class="misc_text_wrap">
        <BasicText v-for="text in texts" :key="text.delay"
          :class="`misc_text ${text.hasOwnProperty('class') ? text.class : ''}`" :initial="initialOptions"
          :enter="getEnterOptions(text.delay)" :text="text.text" />
      </div>
    </section>
  </VContainer>
</template>

<style lang="scss">
#misc {
  .misc_text_wrap {
    padding: 20px 48px 20px 48px;

    .misc_text {
      font-family: "satoshiregular";
      font-size: 20px;
      line-height: 44px;
      letter-spacing: -0.02em;

      &:not(:last-child) {
        padding-bottom: 32px;
      }

      &.bold {
        font-family: "satoshimedium";
        padding-bottom:0px;
      }
    }
  }
}

@media screen and (min-width: 992px) {
  #misc {
    padding-bottom: 0;
  }
}

@media screen and (min-width: 1080px) {
  #misc {
    .misc_text_wrap {
      padding-left: 128px;
      padding-right: 128px;
    }
  }
}
</style>