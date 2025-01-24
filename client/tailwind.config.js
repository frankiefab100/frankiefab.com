/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["selector", '[data-mode="dark"]'],
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF4088",
        background: "#000",
      },
      fontFamily: {
        Bitform: ["Bitform"],
        CooperHewittMedium: ["CooperHewittMedium"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        custom: "-14px 10px 44px -21px rgba(0, 0, 0, 0.24)",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 1rem))" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
    },
  },

  plugins: [],
};
