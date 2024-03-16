import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        foundersGrotesk: ['var(--font-foundersGrotesk)'],
        testFounders: ['var(--font-testFoundersGrotesk)'],
      },

      fontSize: {
        '5xl': '5.625rem', //h1
        '4xl': '0.6875rem',//h2
        '3xl': '0.625rem', //h3
        '2xl': '1rem', //h4
        'base': '1.125rem',
      },
      spacing: {
        'custom-margin': '1.875rem'
      },

      colors: {
        customGray: '#AEAEAE',
        customRed: '#CE1818',
      },
    },
  },
  plugins: [],
};
export default config;
