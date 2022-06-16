const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
      "./components/**/*.{vue,js,ts}",
      "./app.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Signika Negative"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#393E46',
          100: '#EEEEEE',
          200: '#222831',
          300: '#FFD369'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};