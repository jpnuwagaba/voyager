import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        darkMossGreen: "#606C38",
        pakistanGreen: "#283618",
        cornSilk: "#FEFAE0",
        earthYellow: "#DDA15E",
        tigerEye: "#BC6C25",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
export default config
