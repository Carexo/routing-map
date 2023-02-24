/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      darkBlue: "#1d3557",
      blue: "#457b9d",
      lightBlue: "#a8dadc",
      lightGray: "#f1faee",
      orange: "#d01e2d",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
