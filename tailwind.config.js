/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "450px",

      md: "900px",

      lg: "1280px",

      xl: "1920px",
    },
    extend: {},
  },
  plugins: [],
}

