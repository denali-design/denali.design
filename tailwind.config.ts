import type { Config } from "tailwindcss";

export default {
  presets:[
    require('@trevorgreenleaf/denali/tailwindcss.config.js')
  ],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
