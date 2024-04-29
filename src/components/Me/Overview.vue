<script setup>
import BasicText from '@/components/Global/BasicText.vue';
import overviewTexts from '@/assets/json/me/overview.json';
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
    <section id="overview">
      <div class="overview_title_wrap">
        <div class="overview_title" v-motion :initial="initialOptions.basic" :enter="getEnterOptions(0)">
          <h2>HELLO</h2>
        </div>
        <div class="overview_title" v-motion :initial="initialOptions.basic" :enter="getEnterOptions(1)">
          <h1>WORLD</h1>
        </div>
      </div>
      <div class="text_wrap">
        <BasicText v-for="text in overviewTexts" :key="text.delay" class="text" :initial="initialOptions.basic"
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
        font-family: glorifyregular;
        font-weight: 300;
        font-size: 70px;
        line-height: 72px;
        letter-spacing: -0.02em;
      }

      h2 {
        font-family: glorifyregular;
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