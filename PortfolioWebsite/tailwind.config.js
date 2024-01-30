/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        fontSize:{
          'xxl' : '100rem',
        }
      }
    },
  },
  plugins: [],
}

