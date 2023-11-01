module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_7f": "#0000007f" },
        gray: { 200: "#f1f0f0", 800: "#4f4f4f" },
        light_blue: { A700: "#007bff" },
        blue: { 50: "#ebf5ff", 300: "#5da8f9" },
        blue_gray: { 900: "#1c274c" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        robotoserif: "Roboto Serif",
        roboto: "Roboto",
        robotocondensed: "Roboto Condensed",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
