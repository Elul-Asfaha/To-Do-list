/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Agbalumo': ['Agbalumo', 'sans-serif'],
        'Playpen': ['Playpen Sans', 'cursive']
      },
    },
  },
  plugins: [],
}

