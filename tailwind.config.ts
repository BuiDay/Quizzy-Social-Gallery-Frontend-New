import type { Config } from "tailwindcss"

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        secondary: 'var(--color-secondary)',
        dark: 'var(--color-text-dark)',
        gray: 'var(--color-text-gray)',
        highlight: 'var(--color-highlight)',
        soft: 'black',
        white: 'var(--color-white)',
      },
      backgroundImage: {
        'btn-gradient': 'var(--color-btn-gradient)',
      },
    },
  },
} satisfies Config

export default config