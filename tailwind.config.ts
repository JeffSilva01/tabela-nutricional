import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-poppins)',
      },
      colors: {
        primary: {
          200: '#D8EED2',
          300: '#B1DDA5',
          500: '#3BAB1E',
        },
        secondary: '#DE215A',
        surface: '#FDFDFD',
        dark: '#242424',
      },
    },
  },
  plugins: [],
}
export default config
