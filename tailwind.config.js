/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        bebas: ["BebasNeue", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "page-color": "#0a0a0a",
        "primary-color": "#c7c7c7",
        "button-bg": "#d3e97a",
        "button-bg-black": "#222222",
        "text-bg": "#484848",
        "color-projects-img": "#1a1a1a",
      },
    },
  },
  plugins: [],
};
