/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-hero": "url('/src/assets/home/mobile/image-header.jpg')",
      },
    },
  },
  plugins: [],
};
