import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)'
          },
          '50%': {
            transform: 'translateY(0)'
            
          }
        }
      },
      animation: {
        bounce1s: 'bounce 1s ease-in-out  infinite',
        bounce2s: 'bounce 1.5s ease-in-out infinite',
        bounce3s: 'bounce 3s ease-in-out infinite',
        bounce4s: 'bounce 3.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
