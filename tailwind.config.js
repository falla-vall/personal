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
      },
      animation: {
        "vertical-infinite": "vertical-infinite 10s infinite",
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
