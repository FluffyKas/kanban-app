import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        kanban_purple: 'hsla(242, 48%, 58%, 1)',
        kanban_purple_hover: 'hsla(242, 100%, 82%, 1)',
        kanban_grey_400: 'hsla(216, 15%, 57%, 1)',
        kanban_grey_800: 'hsla(235, 12%, 19%, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
