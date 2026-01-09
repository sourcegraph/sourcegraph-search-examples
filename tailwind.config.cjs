/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          light: 'var(--primary-light)',
          hover: 'var(--primary-hover)',
        },
        secondary: 'var(--secondary)',
        dark: 'var(--dark)',
        'dark-text': 'var(--dark-text)',
        light: 'var(--light)',
        'light-text': 'var(--light-text)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
