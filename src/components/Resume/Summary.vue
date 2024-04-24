<script setup>
import BasicText from '@/components/Global/BasicText.vue';

const initialOptions = { opacity: 0, y: 100 };
const getEnterOptions = (i) => ({ opacity: 1, y: 0, transition: { type: 'spring', stiffness: '100', delay: 100 * i } });
const texts = [
  {
    text: 'Summary',
    delay: 2,
    class: 'bold',
  },
  {
    text: 'I embarked on my developer journey with a 2-year apprenticeship as a full-stack developer at Trèfle Applications, a subsidiary of the Groupe Trèfle. My primary responsibility was maintaining the main internal website of the Groupe Trèfle, which integrated the functionalities of an Enterprise Resource Planning (ERP) and a Customer Relationship Management (CRM). Both systems were created and developed from scratch by Trèfle Applications.',
    delay: 3,
  },
  {
    text: 'Afterward, I embarked on a 1-year apprenticeship as a full-stack developer at Run Services, an insurance brokerage subsidiary of AXA. My primary mission was to modernize the API development process. I had the opportunity to completely overhaul the existing API system. It was noted that all Run Services websites utilized the same client form, thus I was tasked with standardizing their usage of a unified API. Additionally, I implemented web services alongside the API to handle specific information such as price calculations or customer file acceptance.',
    delay: 4,
  },
  {
    text: 'Finally, I had the opportunity to work at Solutec as a consultant for Orange Cyberdefense for the last two and a half years.',
    delay: 5,
  }
];
</script>

<template>
  <VContainer>
    <section id="summary">
      <div class="text_wrap">
        <BasicText v-for="text in texts" :key="text.delay"
          :class="`text ${text.hasOwnProperty('class') ? text.class : ''}`" :initial="initialOptions"
          :enter="getEnterOptions(text.delay)" :text="text.text" />
      </div>
    </section>
  </VContainer>
</template>
