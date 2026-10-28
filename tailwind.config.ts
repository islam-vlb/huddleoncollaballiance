import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14123F',
        indigo: { DEFAULT: '#3730C9', deep: '#221E8F', soft: '#ECEBFF' },
        teal: { DEFAULT: '#00C9B1', deep: '#007F72', soft: '#DDFBF6' },
        mist: '#F6F7FF',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      borderRadius: { card: '22px' },
      boxShadow: { soft: '0 10px 30px -12px rgba(55,48,201,0.25)' },
    },
  },
  plugins: [],
};
export default config;
