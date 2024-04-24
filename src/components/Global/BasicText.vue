<script setup>
const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  initial: {
    type: Object,
    required: true
  },
  enter: {
    type: Object,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div :class="props.class" v-motion :initial="props.initial" :enter="props.enter">
    <span>{{ props.text }}</span>
  </div>
</template>