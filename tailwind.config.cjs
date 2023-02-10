/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "1112px",
    },
    colors: {
      "Neutral/Off_white": "#FFFDFA",
      "Neutral/Grayish_blue": "#C5C6CE",
      "Neutral/Darkgrayishblue": "#5D5F79",
      "Neutral/VeryDarkBlue": "#000019",
      "primary/SoftRed": "#E9AB53",
      "primary/Red": "#F15E50",
      "primary/SoftBlue/400": "#5368df",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
