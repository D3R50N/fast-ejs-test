/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/pages/**/*.{ejs,html}",
    "./app/components/**/*.{ejs,html}",
    "./app/data/**/*.json",
  ],
  theme: {
    extend: {
      fontFamily: {
        impact: ["Impact", "sans-serif"],
      },
    },
  },
  plugins: [],
};
