/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFF4E9",
        foreground: "var(--foreground)",
        navButton:"#9C9791",
        primary:"#E05E5E"

      },
    },
  },
  plugins: [],
};
