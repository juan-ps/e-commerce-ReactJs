/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        crim: ['Crimson Pro', 'serif']
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["cupcake", "dark", "cmyk", "autumn"],
  },
}
