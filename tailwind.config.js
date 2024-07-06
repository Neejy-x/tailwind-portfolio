/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: { filter: {
      'grayscale': 'grayscale(1)',
    }},
  },
  plugins: [],
}
