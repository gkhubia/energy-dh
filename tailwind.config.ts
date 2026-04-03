import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#051d40',
          deep: '#030e20',
          mid: '#0a2e5c',
          light: '#0f3d78',
        },
        burgundy: {
          DEFAULT: '#7a001e',
          light: '#a0002a',
          muted: 'rgba(122,0,30,0.35)',
        },
        teal: {
          DEFAULT: '#0b6275',
          light: '#0e7d9a',
          muted: 'rgba(11,98,117,0.35)',
        },
        gold: {
          DEFAULT: '#b8860b',
          light: '#d4a017',
          bright: '#e8b535',
          muted: 'rgba(184,134,11,0.35)',
        },
        cream: {
          DEFAULT: '#e8e8d8',
          light: '#f0f0e6',
          muted: 'rgba(232,232,216,0.6)',
          faint: 'rgba(232,232,216,0.35)',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}

export default config
