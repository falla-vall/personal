/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "vertical-infinite": {
          "0%, 100%": {
            "background-position": "0 0",
          },
          "50%": {
            "background-position": "100% 0",
          },
        },
        "spin-translate": {
          "0%, 100%": {
            transform: "translate(0%, -150%) rotate(0deg)",
          },
          "25%": {
            transform: "translate(150%, 0%) rotate(90deg)",
          },
          "50%": {
            transform: "translate(0%, 150%) rotate(180deg)",
          },
          "75%": {
            transform: "translate(-150%, 0%) rotate(270deg)",
          },
          "100%": {
            transform: "translate(0%, -150%) rotate(360deg)",
          },
        },
      },
      animation: {
        "vertical-infinite": "vertical-infinite 10s infinite",
        "spin-translate": "spin-translate 60s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
  presets: [
    require("@heathmont/moon-core-tw/lib/private/presets/ds-moon-preset"),
  ],
};
