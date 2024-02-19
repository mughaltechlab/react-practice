/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-red-600',
    'bg-green-600',
    'bg-yellow-600',
    'bg-blue-600',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

