<script setup>
import BasicText from '@/components/Global/BasicText.vue';
import workflowTexts from '@/assets/json/me/workflow.json';
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
    <section id="workflow">
      <div class="text_wrap">
        <BasicText v-for="text in workflowTexts" :key="text.delay" class="text" :initial="initialOptions.basic"
          :enter="getEnterOptions(text.delay)" :text="text.text" />
      </div>
    </section>
  </VContainer>
</template>

<style lang="scss">
#workflow {
  display: flex;
}
</style>