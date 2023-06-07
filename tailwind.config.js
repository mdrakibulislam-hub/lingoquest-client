/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#BEE3DB",

          "secondary": "#89B0AE",

          "accent": "#73a580",

          "neutral": "#292b33",

          "base-100": "#fcfcfd",

          "info": "#5d7cd0",

          "success": "#64ddaf",

          "warning": "#efba6c",

          "error": "#f21c32",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}
