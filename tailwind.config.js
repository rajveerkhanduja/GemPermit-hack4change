/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#F5F7FA',
        'neutralDGrey': '#FFBD00',
        'brandPrimary': '#001F57',
        'neutralGrey': '#717171',
        'grey900': '#18191F',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

