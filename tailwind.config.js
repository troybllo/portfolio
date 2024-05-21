/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{css,js,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        9999: "9999",
      },
    },
  },
  plugins: [],
};
