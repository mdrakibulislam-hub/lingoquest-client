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

          "primary": "#D0E3F9",

          "secondary": "#496D96",

          "accent": "#73a580",

          "neutral": "#3D5169",

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

