/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "1rem",

      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
      },
    },
    colors: {
      primary: "#222831",
      secondary: "#31363F",
      accent: "#76ABAE",
      text: "#EEEEEE",
    },
    extend: {
      fontFamily: {
        sans: ["Jetbrains Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
