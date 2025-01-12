/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.html", "./components/**/*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      transitionProperty: {
        fade: "opacity",
      },
    },
  },
  plugins: [],
};
