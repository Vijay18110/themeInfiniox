// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        // This sets Jakarta as the default font for 'font-sans' and 'font-display'
        sans: ["var(--font-jakarta)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-jakarta)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  // ... rest of config
};
export default config;