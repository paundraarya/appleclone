/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'cerah': {
          100: '#F1F1F2',
          200: '#F2F2F4',
          300: '#F9F9FB',
          600: '#303031',
          700: '#313132',
        },
        // ...
      },
    },
  },
  plugins: [],
}