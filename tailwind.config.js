/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        surface: {
          DEFAULT: "#0f0f11",
          light: "#181819",
        },
        accent: {
          DEFAULT: "#a78bfa",
          light: "#c4b5fd",
          dim: "#7c3aed",
        },
        betrWhite: "#F0F2EB",
        neonGreen: "#8EF506",
        betrBlack: "#0F1020",
        blueBlack: "#202030",
        grayWhite: "#D9D9D9",
        darkGWhite: "#737373",
        lightBlue: "#646496",
        imperialRed: "#FF3E41",
        magenta: "#DF367C",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        grandSlang: ["GrandSlang-Roman", "cursive"],
        daveau: ["Daveau", "cursive"],
        anomaly: ["Anomaly", "cursive"],
        laperhens: ["Laperhens", "cursive"],
        superBrain: ["Super Brain", "cursive"],
      },
    },
  },
  plugins: [],
};
