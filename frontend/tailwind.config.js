/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "phone": "576px",
      "tablet": "744px",
      "desktop": "1280px",
    },

    colors: {
      'braunPrimery': '#F5890D',
      'redPrimery': '#EA512E',
      'yellowPrimery': '#FFC315',
      'bgreenPrimery': '#80C282',
      'gray': '#808080',
      'garylight': '#D1D1D1',
      'text': '#464646',
      'whiteText': '#FBFBFB',
      'editor-back': '#D9D9D9',
      'cropperBg': '#C2C2C2D6'
    },

    fontFamily: {
      body: ["Inter", "sans-serif"],
    },

    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    extend: {},
  },
  plugins: [],
};
