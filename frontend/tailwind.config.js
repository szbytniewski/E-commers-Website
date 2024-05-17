/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#000000",
        text: "#fafafa",
        secondary: "#999",
        border: "#777777",
        textField: "#777777",
      },
      fontFamily: {
        body: ["Courier New", "sans-serif"],
      },
      fontSize: {
        base: "14px",
      },
      fontWeight: {
        body: 700,
      },
    },
  },
  plugins: [],
};
