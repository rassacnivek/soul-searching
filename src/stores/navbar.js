import { defineStore } from "pinia";

export const useNavStore = defineStore("navbar", {
  state: () => ({
    isNavActive: false,
  }),
  getters: {
    getNavState: (state) => state.isNavActive,
  },
  actions: {
    toggleNavState() {
      this.isNavActive = !this.isNavActive;
    },
  },
});
