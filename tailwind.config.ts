import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import shadcnUiPlugin from "./src/libraries/tailwindcss/shadcn-ui-plugin";

const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: { 
        recursive: ['var(--font-onest)'], // custom font from layout.tsx
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [animatePlugin, shadcnUiPlugin],
} satisfies Config;

export default config;
