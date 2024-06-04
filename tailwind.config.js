/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGreen: "#A7CB54",
        medGreen: "#5CAD4A",
        darkGreen: "#208D45",
        neonGreen: "#8EF506",
        betrWhite: "#F0F2EB",
        grayWhite: "#D9D9D9",
        darkGWhite: "#737373",
        betrBlack: "#0F1020",
        blueBlack: "#202030",
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
      blur: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
