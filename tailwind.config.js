/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibmMono': ['"IBM Plex Mono"'],
      },
    },
  },
  plugins: [],
}