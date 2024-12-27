/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('assets/images/pattern-bg-desktop.png')",
        'hero-mobile': "url('assets/images/pattern-bg-mobile.png')",
      },
      fontSize: {
        xxs: '0.65rem',
      },
      colors: {
        'very-dark-gray': 'hsl(0, 0%, 17%)',
        'dark-gray': 'hsl(0, 0%, 59%)',
      },
    },
  },
  plugins: [],
};
