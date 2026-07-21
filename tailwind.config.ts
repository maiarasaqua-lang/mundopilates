import type { Config } from "tailwindcss";

// Tailwind v4 uses CSS-first configuration in src/styles.css (@theme).
// This file exists for tooling compatibility.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
} satisfies Config;