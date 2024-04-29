<script setup>
import ExperiencesItem from './ExperiencesItem.vue';
import experiencesTexts from '@/assets/json/resume/experiences.json'
import initialOptions from '@/assets/json/motion/initialOptions.json';

</script>

<template>
  <VContainer>
    <section id="experiences">
      <div class="text_wrap">
        <ExperiencesItem v-for="text in experiencesTexts" :key="text.delay" :initial="initialOptions.basic" :item="text"/>
      </div>
    </section>
  </VContainer>
</template>
