/** @type {import('windicss').Config} */
import { defineConfig } from "windicss/helpers";

module.exports = defineConfig({
  extract: {
    include: ["**/*.{jsx,tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        fira: ["Fira Code", "monospace"],
      },
      screen: {
        xs: "480px",
        "3xl": "1920px",
      },
    },
  },
});
