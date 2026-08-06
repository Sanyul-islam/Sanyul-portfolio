/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B121F", // page background
        panel: "#111A2B", // slightly lighter panel background
        panelLine: "#1E293F", // borders / dividers
        muted: "#8891A7", // secondary text
        accent: "#F15A38", // signature coral/orange
        accentDim: "#F15A3822",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
