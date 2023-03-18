/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      nav: "1280px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        "primary": "#014871",
        "secondary": "#A0EBCF",
      },
      backgroundImage: {
        "skyline": "url('../public/images/city.png')",
      },
      fontFamily: {
        'jetbrains-mono': ['"JetBrains Mono"', 'sans-serif']
      }
    },
  },
  plugins: [],
};
