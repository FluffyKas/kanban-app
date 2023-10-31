import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
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
        kanban_grey_900: 'hsla(235, 12%, 19%, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
