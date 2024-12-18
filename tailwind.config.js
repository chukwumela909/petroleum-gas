/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js}", // Include JavaScript files within the src directory
    "./index.html", // Include the main HTML file (or specific paths)
    "./other-pages/*.html", // Include HTML files in other directories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

