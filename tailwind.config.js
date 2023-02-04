/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./scripts/*.js"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      orange: {
        200: "hsl(35, 77%, 62%)",
      },
      red: {
        200: "hsl(5, 85%, 63%)",
      },
      gray: {
        200: "hsl(233, 8%, 79%)",
        800: "hsl(236, 13%, 42%)",
        900: "hsl(240, 100%, 5%)",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
      black: 900,
    },
    extend: {},
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
