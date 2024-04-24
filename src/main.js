// Plugins
import vuetify from "./plugins/vuetify";
import router from "@/router";

// Composables
import { createApp } from "vue";
import { createPinia } from "pinia";
import Vue3Lottie from 'vue3-lottie'
import { MotionPlugin } from '@vueuse/motion'

// Components
import App from "./App.vue";

const app = createApp(App);

app
  .use(vuetify)
  .use(router)
  .use(createPinia())
  .use(Vue3Lottie)
  .use(MotionPlugin)
  .mount("#app");
