/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-mint": "#A1E9C5",
        "green-moss": "#779556",
        "green-olive": "#B5BD89",
        "gray-light": "#D3D0CB",
        "gray-dark": "#4E5552",
        'green-water': '#7FFFD4',
        'green-sage': '#9DC183',
        'green-grass': '#6CB28E',
        'light-olive': '#BABC72',
        'green-jade': '#00A86B',
        'light-gray': '#F5F5F5',
        'light-blue': '#E6F7FB',
        'light-yellow': '#FFF7E6',
        'light-pink': '#FFE6F7',
        'dark-gray': '#555555',
        'dark-blue': '#25476A',
        'dark-yellow': '#E1B382',
        'dark-pink': '#E09BB9',
        'light-beige': '#F4E1C1',
        'light-cream': '#F5F5DC',
        'dark-beige': '#D2B48C',
        'dark-cream': '#FFF8DC',
        'light-lavender': '#E9E1FF',
        'light-purple': '#D9C6E0',
        'dark-lavender': '#B19CD9',
        'dark-purple': '#7E5E99',
        'red-soft': '#FFDADA',
        'red-calm': '#FFB6B6',
        'red-warm': '#FF9797',
        'red-rose': '#FFCED4',
        'red-vibrant': '#FF6363',
        'red-bold': '#EF4444',
        'red-intense': '#DC2626',
      },
    },
    plugins: [],
  },
};