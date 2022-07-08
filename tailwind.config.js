/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: { "screen-navbar-player": "calc(100vh - 6rem - 6rem)" },
    },
  },
  plugins: [],
};
