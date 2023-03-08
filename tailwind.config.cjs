/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#DF7857",
        tDark: "#888888",
        tSecondary: "#4e4e4e",
        bDark: "#d9d9d9",
      },
    },
  },
  plugins: [],
};
