/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        alegreyaSans: ["Alegreya Sans SC", "sans-serif"],
        gaegu: ["Gaegu", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        playwriteNGModern: ["Playwrite NG Modern", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      content: {
        'sparkle': "'✨'",
        'lightning': "'⚡'",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

