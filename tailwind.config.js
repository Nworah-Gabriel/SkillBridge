/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#eef3ffff',
          100: '#e0ebffff',
          200: '#c7d3feff',
          300: '#a5b4fcff',
          400: '#81a5f8ff',
          500: '#638ef1ff',
          600: '#4673e5ff',
          700: '#3864caff',
          800: '#3051a3ff',
          900: '#2e3f81ff',
          1000: '#202f59ff',
          1100: '#18203fff',
        },
        skyblue:{
            300: '#57b0feff',
        }
      },
    },
  },
  plugins: [],
}