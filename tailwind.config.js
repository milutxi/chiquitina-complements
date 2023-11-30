/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: "486px",
      md: "547px",
      lg: "768px",
      xl: "1024px",
    },

    fontFamily: {
      sriracha: "Sriracha"
    },

    extend: {
      colors: {
        buttons: "rgb(254 215 170)",
        buttonsHover: "rgb(253 186 116)",
        second: "rgb(148 163 184)",
      }
     
    },
  },
  plugins: [],
}

