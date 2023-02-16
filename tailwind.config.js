/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1280px",
      },
    },
  },
  plugins: [],
};
