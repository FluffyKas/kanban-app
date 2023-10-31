/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        kanban_purple: 'hsla(242, 48%, 58%, 1)',
        kanban_purple_hover: 'hsla(242, 100%, 82%, 1)',
        kanban_purple_grey_hover: 'hsla(242, 48%, 58%, 0.25)',
        kanban_red: 'hsla(0, 78%, 63%, 1)',
        kanban_red_hover: 'hsla(0, 100%, 80%, 1)',
        kanban_grey_100: 'hsla(220, 69%, 97%, 1)',
        kanban_grey_200: 'hsla(221, 69%, 94%, 1)',
        kanban_grey_500: 'hsla(216, 15%, 57%, 1)',
        kanban_grey_700: 'hsla(235, 12%, 27%, 1)',
        kanban_grey_800: 'hsla(235, 12%, 19%, 1)',
        kanban_grey_900: 'hsla(235, 16%, 15%, 1)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
