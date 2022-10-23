/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "2rem",
      },
    },
    accentColor: (theme) => ({
      ...theme("colors"),
      "primary-60": "#e60e2e",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      "primary-100": "#e6f7ff",
      "primary-500": "#1890ff"
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "primary-100": "#e6f7ff",
      "primary-500": "#1890ff"
    }),
    borderColor: theme => ({
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      "primary-100": "#e6f7ff",
      "primary-500": "#1890ff"
    }),
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}