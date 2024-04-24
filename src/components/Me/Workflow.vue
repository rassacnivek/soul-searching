<script setup>
import BasicText from '@/components/Global/BasicText.vue';
import Me from '@/assets/img/me.png';

const initialOptions = { opacity: 0, y: 100 };
const getEnterOptions = (i) => ({ opacity: 1, y: 0, transition: { type: 'spring', stiffness: '100', delay: 100 * i } });
const texts = [
  {
    text: 'I have been coding in PHP for 7 years, including approximately 2 years with Symfony and 2 years with Laravel. Additionally, I have 2 years of experience with Vue 2 and 3, utilizing both Options and Composition API, and 1 year of experience with React.',
    delay: 5,
  },
  {
    text: 'When developing my websites, I consistently use SASS for styling applications, unless I am utilizing prebuilt components and classes like those offered by Vuetify.',
    delay: 6,
  },
  {
    text: 'Throughout my development process, I adhere to best practices and maintain clean code using ESLint and Prettier.',
    delay: 7,
  }
];
</script>

<template>
  <VContainer>
    <section id="workflow">
      <div class="text_wrap">
        <BasicText v-for="text in texts" :key="text.delay" class="text" :initial="initialOptions"
          :enter="getEnterOptions(text.delay)" :text="text.text" />
      </div>
      <div class="image_wrap">
        <img class="image" :src="Me" alt="What I look like.." v-motion :initial="initialOptions"
          :enter="getEnterOptions(6.5)" />
      </div>
    </section>
  </VContainer>
</template>

<style lang="scss">
#workflow {
  display: flex;

  .image_wrap {
    display: none;
  }
}

@media screen and (min-width: 992px) {
  #workflow {
    .text_wrap {
      width: 56%;
    }

    .image_wrap {
      width: 44%;
      display: flex;
      align-items: center;
      position: relative;

      .image {
        width: 100%;
        clip-path: polygon(92.32051% 40%, 93.79385% 43.1596%, 94.69616% 46.52704%, 95% 50%, 94.69616% 53.47296%, 93.79385% 56.8404%, 92.32051% 60%, 79.82051% 81.65064%, 77.82089% 84.50639%, 75.35575% 86.97152%, 72.5% 88.97114%, 69.3404% 90.44449%, 65.97296% 91.34679%, 62.5% 91.65064%, 37.5% 91.65064%, 34.02704% 91.34679%, 30.6596% 90.44449%, 27.5% 88.97114%, 24.64425% 86.97152%, 22.17911% 84.50639%, 20.17949% 81.65064%, 7.67949% 60%, 6.20615% 56.8404%, 5.30384% 53.47296%, 5% 50%, 5.30384% 46.52704%, 6.20615% 43.1596%, 7.67949% 40%, 20.17949% 18.34936%, 22.17911% 15.49361%, 24.64425% 13.02848%, 27.5% 11.02886%, 30.6596% 9.55551%, 34.02704% 8.65321%, 37.5% 8.34936%, 62.5% 8.34936%, 65.97296% 8.65321%, 69.3404% 9.55551%, 72.5% 11.02886%, 75.35575% 13.02848%, 77.82089% 15.49361%, 79.82051% 18.34936%);
      }
    }
  }
}
</style>