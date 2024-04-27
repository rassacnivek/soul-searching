<script setup>
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

var childDelay = props.childStartDelay;

const getEnterOptions = (i) => ({ opacity: 1, y: 0, transition: { type: 'spring', stiffness: '100', delay: 100 * i } });
const getChildrenEnterOptions = (shouldIncr = true) => {
  const r = { opacity: 1, y: 0, transition: { type: 'spring', stiffness: '100', delay: 100 * childDelay } };
  if (shouldIncr) {
    childDelay++;
  }
  return r;
};
</script>

<template>
  <div v-if="!props.item.hasOwnProperty('children')"
    :class="`text ${props.item.hasOwnProperty('class') ? props.item.class : ''}`" v-motion :initial="props.initial"
    :enter="getEnterOptions">
    <span>{{ props.item.text }}</span>
  </div>
  <div v-else class="text_child">
    <p class="bold" v-motion :initial="props.initial" :enter="getChildrenEnterOptions()">
      {{ props.item.text }}
    </p>
    <p class="light" v-motion :initial="props.initial" :enter="getChildrenEnterOptions()">
      {{ props.item.date }}
    </p>
    <ul>
      <li v-for="(task, i) in props.item.children.tasks" :key="i" v-motion :initial="props.initial"
        :enter="getChildrenEnterOptions(false)">
        {{ task }}
      </li>
    </ul>
    <p class="bold" v-motion :initial="props.initial" :enter="getChildrenEnterOptions()">
      Stacks
    </p>
    <div v-if="props.item.children.stacks.hasOwnProperty('front') && props.item.children.stacks.front.length > 0">
      <p v-motion :initial="props.initial" :enter="getChildrenEnterOptions()">
        Front
      </p>
      <ul>
        <li v-for="(stack, i) in props.item.children.stacks.front" :key="i" v-motion :initial="props.initial"
          :enter="getChildrenEnterOptions(false)">
          {{ stack }}
        </li>
      </ul>
    </div>
    <div v-if="props.item.children.stacks.hasOwnProperty('back') && props.item.children.stacks.back.length > 0">
      <p v-motion :initial="props.initial" :enter="getChildrenEnterOptions()">
        Back
      </p>
      <ul>
        <li v-for="(stack, i) in props.item.children.stacks.back" :key="i" v-motion :initial="props.initial"
          :enter="getChildrenEnterOptions(false)">
          {{ stack }}
        </li>
      </ul>
    </div>
    <div v-if="props.item.children.stacks.hasOwnProperty('system') && props.item.children.stacks.system.length > 0">
      <p v-motion :initial="props.initial" :enter="getChildrenEnterOptions()">
        System
      </p>
      <ul>
        <li v-for="(stack, i) in props.item.children.stacks.system" :key="i" v-motion :initial="props.initial"
          :enter="getChildrenEnterOptions(false)">
          {{ stack }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.text_child {
  font-family: "satoshiregular";
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