<script setup>
import ExperiencesItem from './ExperiencesItem.vue';

const initialOptions = { opacity: 0, y: 100 };
const texts = [
  {
    text: 'Experiences',
    delay: 6,
    class: 'bold',
  },
  {
    text: 'Full-stack engineer, Orange Cyberdefense',
    date: 'October 2021 — Now, Consultant',
    delay: 7,
    children: {
      tasks: [
        'Referent of 2 projects',
        'Creation from scratch of a data parsing API and its database',
        'Major Laravel upgrade migration',
        'Complete frontend revamp',
        'Code review',
        'Realization of non-regression tests',
        'Continuous integration',
        'Writing of documentations',
        'Reporting of anomalies',
        'Code refactoring',
      ],
      stacks: {
        front: [
          'VueJS 2 (Options API) with Vuex',
          'VueJS 3 (Composition API) with Pinia',
          'Scss',
          'Bootstrap Vue',
          'Vuetify',
        ],
        back: [
          'PHP 7 & 8',
          'Laravel 8 & 10',
        ],
        system: [
          'Linux',
          'Docker',
        ],
      },
    },
  },
  {
    text: 'Full-stack engineer, Run Services',
    date: 'August 2020 — August 2021, Apprenticeship',
    delay: 14,
    children: {
      tasks: [
        'Update of pages concerning SEO and new rules concerning RGPD and personal data',
        'Redesign of the APIs into distinct micro-services that can be reused on all sites',
        'Redesign of the client form of AXA France websites',
        'Realization of non-regression tests',
        'Creation of data sets',
        'Writing of documentations',
        'Reporting of anomalies',
      ],
      stacks: {
        front: [
          'ReactJS',
          'NextJS',
          'SASS',
        ],
        back: [
          'PHP 7',
          'Symfony 5',
          'API Platform',
          'MySQL',
        ],
        system: [
          'Docker',
        ],
      },
    },
  },
  {
    text: 'Fullstack engineer, Trèfle Applications',
    date: 'August 2018 — August 2020, Apprenticeship',
    delay: 21,
    children: {
      tasks: [
        'Fullstack development of an website mixing an homemade CRM and ERP',
        'Code refactoring',
        'Creation of an homemade MVC framework',
        'Realization of developments from technical specifications of the project manager',
        'Management of the implementation in acceptance, in pre-production and in production',
        'Introduction of test sets',
        'Reporting of anomalies',
      ],
      stacks: {
        front: [
          'HTML5',
          'CSS3',
          'jQuery',
        ],
        back: [
          'PHP 5 & 7',
          'MySQL',
        ],
      },
    },
  },
];
</script>

<template>
  <VContainer>
    <section id="experiences">
      <div class="text_wrap">
        <ExperiencesItem v-for="text in texts" :key="text.delay" :initial="initialOptions" :item="text"
          :child-start-delay="7" />
      </div>
    </section>
  </VContainer>
</template>
