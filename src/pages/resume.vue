<script setup>
import Summary from '@/components/Resume/Summary.vue'
import Experiences from '@/components/Resume/Experiences/Experiences.vue'

const initialOptions = { opacity: 0, y: 100 };
const getEnterOptions = (i) => ({ opacity: 1, y: 0, transition: { type: 'spring', stiffness: '100', delay: 100 * i } });

const texts = [
  {
    text: 'I am currently employed as a full-stack developer at Orange Cyberdefense, a subsidiary of the Orange company, specializing in cybersecurity.',
    delay: 1,
  },
]
</script>

<template>
  <VContainer fluid>
    <VContainer>
      <section id="resume">
        <div class="resume_title_wrap">
          <div class="resume_title" v-motion :initial="initialOptions" :enter="getEnterOptions(0)">
            <h1>Resume</h1>
          </div>
        </div>
        <div class="resume_text_wrap">
          <BasicText v-for="text in texts" :key="text.delay"
            :class="`resume_text ${text.hasOwnProperty('class') ? text.class : ''}`" :initial="initialOptions"
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
        font-family: "glorifyregular";
        font-weight: 300;
        font-size: 70px;
        line-height: 72px;
        letter-spacing: -0.02em;
      }
    }
  }

  .resume_text_wrap {
    padding: 60px 48px 0px 48px;

    .resume_text {
      font-family: "satoshiregular";
      font-size: 20px;
      line-height: 44px;
      letter-spacing: -0.02em;

      &.bold {
        font-family: "satoshimedium";
      }

      &:not(:last-child) {
        padding-bottom: 32px;
      }
    }
  }
}

@media screen and (min-width: 992px) {
  #resume {
    padding-bottom: 0;
  }
}

@media screen and (min-width: 1080px) {
  #resume {
    .resume_text_wrap {
      padding-left: 128px;
      padding-right: 128px;
    }
  }
}
</style>