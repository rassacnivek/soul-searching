<script setup>
import BasicText from '@/components/Global/BasicText.vue';
const initialOptions = { opacity: 0, y: 100 };
const getEnterOptions = (i) => ({ opacity: 1, y: 0, transition: { type: 'spring', stiffness: '100', delay: 100 * i } });
const texts = [
  {
    text: 'I am a fullstack engineer with a perfectionist\'s sense.',
    delay: 2,
  },
  {
    text: 'Since my childhood, I have always been passionate about computers and IT, and this passion has only grown over the years. On a daily basis, I am constantly seeking new ways to develop, whether it\'s refining frontend designs on websites like Dribbble, or staying updated on frontend and backend development through platforms like React Hebdo or the GitHub trending section.',
    delay: 3,
  },
  {
    text: 'I am always on the lookout for ways to improve in all aspects of life, whether it\'s in gaming, work, drums or even sports.',
    delay: 4,
  }
];
</script>

<template>
  <VContainer>
    <section id="overview">
      <div class="overview_title_wrap">
        <div class="overview_title" v-motion :initial="initialOptions" :enter="getEnterOptions(0)">
          <h2>HELLO</h2>
        </div>
        <div class="overview_title" v-motion :initial="initialOptions" :enter="getEnterOptions(1)">
          <h1>WORLD</h1>
        </div>
      </div>
      <div class="text_wrap">
        <BasicText v-for="text in texts" :key="text.delay" class="text" :initial="initialOptions"
          :enter="getEnterOptions(text.delay)" :text="text.text" />
      </div>
    </section>
  </VContainer>
</template>

<style lang="scss">
#overview {
  .overview_title_wrap {
    padding-top: 140px;

    .overview_title {
      overflow: hidden;
      text-align: center;

      h1 {
        font-family: "glorifyregular";
        font-weight: 300;
        font-size: 70px;
        line-height: 72px;
        letter-spacing: -0.02em;
      }

      h2 {
        font-family: "glorifylight";
        font-weight: 400;
        font-size: 44px;
        line-height: 48px;
        letter-spacing: -1px;
      }
    }
  }

  .text_wrap {
    padding: 150px 48px 20px 48px;
  }
}

@media screen and (min-width: 768px) {
  #overview {
    .overview_title_wrap {
      padding-top: 180px;

      .overview_title {
        h1 {
          font-size: 108px;
          line-height: 98px;
          letter-spacing: -0.01em;
        }

        h2 {
          font-size: 68px;
          line-height: 64px;
        }
      }
    }

    .text_wrap {
      padding-top: 148px;
    }
  }
}

@media screen and (min-width: 834px) {
  #overview {
    .overview_title_wrap {
      .overview_title {
        h1 {
          font-size: 128px;
          line-height: 120px;
          letter-spacing: -0.01em;
        }

        h2 {
          font-size: 80px;
          line-height: 80px;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  #overview {
    padding-bottom: 0;

    .overview_title_wrap {
      padding-top: 100px;

      .overview_title {
        h1 {
          font-size: 136px;
          line-height: 128px;
          letter-spacing: -0.004em;
        }

        h2 {
          font-size: 84px;
          line-height: 80px;
          letter-spacing: -0.002em;
        }
      }
    }

    .text_wrap {
      padding-top: 62px;
    }
  }
}

@media screen and (min-width: 1080px) {
  #overview {
    .overview_title_wrap {
      .overview_title {
        h1 {
          font-size: 144px;
          line-height: 140px;
          letter-spacing: -0.002em;
        }

        h2 {
          font-size: 90px;
          line-height: 80px;
          letter-spacing: -0.004em;
        }
      }
    }
  }
}

@media screen and (min-width: 1600px) {
  #overview {
    .overview_title_wrap {
      padding-top: 140px;

      .overview_title {
        h2 {
          font-size: 104px;
          line-height: 96px;
        }

        h1 {
          font-size: 168px;
          line-height: 148px;
          letter-spacing: -0.006em;
        }
      }
    }

    .text_wrap {
      padding-top: 26px;
    }
  }
}
</style>