/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          Default:"#40DFCF",
          hover: '#40dfee',
        },
        disabled:{
          Default:"#8095AC",
        }
      }
    },
  },
  plugins: [],
}

