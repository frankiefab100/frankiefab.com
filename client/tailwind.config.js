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
        shadow: "-14px 10px 44px -21px rgba(0, 0, 0, 0.24)",
      },
    },
  },

  plugins: [],
};
