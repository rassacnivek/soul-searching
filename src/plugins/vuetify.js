import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#9155FD",
          secondary: "#8A8D93",
          "on-secondary": "#fff",
          background: "#FFF3E0",
          "on-background": "#090909",
        },
        variables: {
          yellow: "#FFC330",
          orange: "#FF6300",
          lightorange: "#FF9900",
          white: "#ffffff",
          black: "#090909",
        },
      },
    },
  },
});
