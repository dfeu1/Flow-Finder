/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        flow: {
          blue: '#3b82f6',
          purple: '#8b5cf6',
          green: '#10b981',
        }
      }
    },
  },
  plugins: [],
}

