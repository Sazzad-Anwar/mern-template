module.exports = {
  darkMode: "class",
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "2rem",
        // sm: '2rem',
        // lg: '4rem',
        // xl: '2rem',
        // '2xl': '2rem',
      },
    },
    textColor: (theme) => ({
      ...theme("colors"),
      dark: "#282C34",
      deepDark: "#20232A",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      dark: "#282C34",
      deepDark: "#20232A",
    }),
  },
  plugins: [],
};
