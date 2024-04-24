<script setup>
const props = defineProps({
  initial: {
    type: Object,
    required: true
  },
  enter: {
    type: Object,
    required: true
  },
  item: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div v-if="!props.item.hasOwnProperty('children')"
    :class="`experiences_text ${props.item.hasOwnProperty('class') ? props.item.class : ''}`" v-motion
    :initial="props.initial" :enter="props.enter">
    <span>{{ props.item.text }}</span>
  </div>
  <div v-else class="experiences_text_child">
    <p class="bold">
      {{ props.item.text }}
    </p>
    <p class="light">
      {{ props.item.date }}
    </p>
    <ul>
      <li v-for="(task, i) in props.item.children.tasks" :key="i">
        {{ task }}
      </li>
    </ul>
    <p class="bold">
      Stacks
    </p>
    <div v-if="props.item.children.stacks.hasOwnProperty('front') && props.item.children.stacks.front.length > 0">
      <p>
        Front
      </p>
      <ul>
        <li v-for="(stack, i) in props.item.children.stacks.front" :key="i">
          {{ stack }}
        </li>
      </ul>
    </div>
    <div v-if="props.item.children.stacks.hasOwnProperty('back') && props.item.children.stacks.back.length > 0">
      <p>
        Back
      </p>
      <ul>
        <li v-for="(stack, i) in props.item.children.stacks.back" :key="i">
          {{ stack }}
        </li>
      </ul>
    </div>
    <div v-if="props.item.children.stacks.hasOwnProperty('system') && props.item.children.stacks.system.length > 0">
      <p>
        System
      </p>
      <ul>
        <li v-for="(stack, i) in props.item.children.stacks.system" :key="i">
          {{ stack }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.bold {
  font-family: "satoshimedium";
}

.light {
  font-family: "satoshilight";
}

.experiences_text {
  font-family: "satoshiregular";
  font-size: 20px;
  line-height: 44px;
  letter-spacing: -0.02em;


  &:not(:last-child) {
    padding-bottom: 32px;
  }
}

.experiences_text_child {
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