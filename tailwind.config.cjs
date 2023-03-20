/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#DF7857",
        brandHover: "#c86b4d",
        dark: "#0c0c0c",
        tDark: "#888888",
        tSecondary: "#4e4e4e",
        bDark: "#d9d9d9",
        hover: "#413543",
      },
      fontFamily: {
        main: ["Lato", "sans-serif"],
        logo: ["Rammetto One", "cursive"],
      },
    },
  },
  plugins: [],
};
