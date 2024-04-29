<script setup>
import enterOptions from '@/assets/json/motion/enterOptions.json';

const props = defineProps({
  initial: {
    type: Object,
    required: true,
  },
  childStartDelay: {
    type: Number,
    required: false,
    default: 0,
  },
  item: {
    type: Object,
    required: true,
  }
});

const getEnterOptions = (i) => ({
  ...enterOptions.basic,
  transition: {
    ...enterOptions.basic.transition,
    delay: 100 * i,
  }
});
</script>

<template>
  <div v-if="!props.item.hasOwnProperty('children')"
    :class="`text ${props.item.hasOwnProperty('class') ? props.item.class : ''}`" v-motion :initial="props.initial"
    :enter="getEnterOptions(props.item.delay)">
    <span>{{ props.item.text }}</span>
  </div>
  <div v-else class="text_child">
    <p class="bold" v-motion :initial="props.initial" :enter="getEnterOptions(props.item.delay)">
      {{ props.item.text }}
    </p>
    <p class="light" v-motion :initial="props.initial" :enter="getEnterOptions(props.item.delay)">
      {{ props.item.date }}
    </p>
    <ul v-motion :initial="props.initial" :enter="getEnterOptions(props.item.children.tasks.delay)">
      <li v-for="(task, i) in props.item.children.tasks.texts" :key="i">
        {{ task }}
      </li>
    </ul>
    <p class="bold" v-motion :initial="props.initial" :enter="getEnterOptions(props.item.children.stacks.delay)">
      Stacks
    </p>
    <div v-if="props.item.children.stacks.hasOwnProperty('front') && props.item.children.stacks.front.texts.length > 0">
      <p v-motion :initial="props.initial" :enter="getEnterOptions(props.item.children.stacks.front.delay)">
        Front
      </p>
      <ul v-motion :initial="props.initial" :enter="getEnterOptions(props.item.children.stacks.front.delay)">
        <li v-for="(stack, i) in props.item.children.stacks.front.texts" :key="i">
          {{ stack }}
        </li>
      </ul>
    </div>
    <div v-if="props.item.children.stacks.hasOwnProperty('back') && props.item.children.stacks.back.texts.length > 0">
      <p v-motion :initial="props.initial" :enter="getEnterOptions(props.item.children.stacks.back.delay)">
        Back
      </p>
      <ul v-motion :initial="props.initial" :enter="getEnterOptions(props.item.children.stacks.back.delay)">
        <li v-for="(stack, i) in props.item.children.stacks.back.texts" :key="i">
          {{ stack }}
        </li>
      </ul>
    </div>
    <div
      v-if="props.item.children.stacks.hasOwnProperty('system') && props.item.children.stacks.system.texts.length > 0">
      <p v-motion :initial="props.initial" :enter="getEnterOptions(props.item.children.stacks.system.delay)">
        System
      </p>
      <ul v-motion :initial="props.initial" :enter="getEnterOptions(props.item.children.stacks.system.delay)">
        <li v-for="(stack, i) in props.item.children.stacks.system.texts" :key="i">
          {{ stack }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.text_child {
  font-family: satoshiregular;
  font-size: 18px;

  ul {
    list-style: inside none;
    padding-left: 34px;
    margin-top: 16px;
    margin-bottom: 20px;

    li::before {
      content: "»";
      font-size: 14px;
      vertical-align: text-bottom;
      margin-right: 4px;
    }
  }

  &:not(:last-child) {
    padding-bottom: 24px;
  }
}
</style>