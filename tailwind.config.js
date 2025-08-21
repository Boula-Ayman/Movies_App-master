/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#ff2c1f",
        "text-color": "#020307",
        "bg-color": "#fff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("scrolled", "&.scrolled");
    },
  ],
};
