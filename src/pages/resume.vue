<script setup>
import Summary from '@/components/Resume/Summary.vue';
import resumeTexts from '@/assets/json/resume/resume.json';
import Experiences from '@/components/Resume/Experiences/Experiences.vue';
import BasicText from '@/components/Global/BasicText.vue';
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
  <VContainer fluid>
    <VContainer>
      <section id="resume">
        <div class="resume_title_wrap">
          <div class="resume_title" v-motion :initial="initialOptions.basic" :enter="getEnterOptions(0)">
            <h1>Resume</h1>
          </div>
        </div>
        <div class="text_wrap">
          <BasicText v-for="text in resumeTexts" :key="text.delay"
            :class="`text ${text.hasOwnProperty('class') ? text.class : ''}`" :initial="initialOptions.basic"
            :enter="getEnterOptions(text.delay)" :text="text.text" />
        </div>
      </section>
    </VContainer>
    <Summary />
    <Experiences />
  </VContainer>
</template>

<style lang="scss">
#resume {
  .resume_title_wrap {
    padding-top: 140px;

    .resume_title {
      overflow: hidden;
      text-align: center;

      h1 {
        font-family: glorifyregular;
        font-weight: 300;
        font-size: 70px;
        line-height: 72px;
        letter-spacing: -0.02em;
      }
    }
  }

  &>.text_wrap {
    padding-top: 60px;
    padding-bottom: 0px;
  }
}
</style>