/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGrey: "#475569",
        darkWhite: "#e2e8f0",
        STATERA_BLUE: "#0365CA",
        STATERA_BLUE_DARK: "#012D61",
        STATERA_BLUE_LIGHT: "#03A5ED",
        STATERA_BLUE_VERY_LIGHT: "#338AE5",
        bgSidebarBlue: "#023A74",
        test1: "#338AE5"
      },
    },
  },
  plugins: [],
};
