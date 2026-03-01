/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#7F13EC",
        legacyPrimary: "#7C3AED",
        primaryHover: "#6B10C6",
        primaryDark: "#5E0EB0",
        primaryLight: "#F2E7FC",
        ink: "#141118",
        surfaceDark: "#191022",
        muted: "#756189",
        border: "#E0DBE6",
        surface: "#F2F0F4"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  }
};
