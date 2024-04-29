<script setup>
import BasicText from '@/components/Global/BasicText.vue';
import summaryTexts from '@/assets/json/resume/summary.json';
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
    <section id="summary">
      <div class="text_wrap">
        <BasicText v-for="text in summaryTexts" :key="text.delay"
          :class="`text ${text.hasOwnProperty('class') ? text.class : ''}`" :initial="initialOptions.basic"
          :enter="getEnterOptions(text.delay)" :text="text.text" />
      </div>
    </section>
  </VContainer>
</template>
