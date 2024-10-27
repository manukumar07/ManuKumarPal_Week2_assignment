/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D5F5D", // Deep Teal
        secondary: "#F2C14E", // Golden Sand
        accent: "#F78154", // Sunset Orange
        background: "#F7F7FF", // Soft Cream
        text: "#3C3C3C", // Charcoal Gray
      },
      fontFamily: {
        georgia: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
