module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
