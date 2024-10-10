/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#121212",
        dark2: "#0E0F11",
        dark3: "#1F222A",
        "gray-100": "#898989",
        "gray-200": "#585858",
        "gray-300": "#383535",
        "gray-400": "#6A6A6A",
        indigo: "#7E69FF",
        cream: "#F3C090",
        slate1: "#8996A9",
      },
      fontFamily: {
        phudu: ["Phudu", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
