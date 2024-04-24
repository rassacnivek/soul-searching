<script setup>
import { useRoute } from 'vue-router';

const props = defineProps({
  href: { type: String, required: true },
  label: { type: String, required: true }
});

const route = useRoute();
</script>

<template>
  <li :key="props.href" :class="route.name === props.href ? 'active' : ''">
    <a :href="props.href">{{ props.label }}</a>
  </li>
</template>
