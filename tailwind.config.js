/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        specialDarkBlue: {
          100: "#5E72E4",
          200: "#233451",
          300: "#454B60",
          400: "#172B4D",
        },
        specialLightGray: {
          100: "#E9EBEE",
        },
        specialSimpleBlue: {
          100: "#1C44D2",
        },
      },
    },
  },
  plugins: [],
};
