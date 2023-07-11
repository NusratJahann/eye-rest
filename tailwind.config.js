/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#6eff6a",
          "primary-focus": "#7dff79",
          "neutral": "#131413",
          "neutral-focus": "#1e1f1e",
          "base-100": "#060706",
          "base-content": "#ffffff",
          "text-lg": "1rem",
          
          "--rounded-btn": "0.9375rem",
          "--rounded-badge": "1.9rem", 
          "--animation-btn": "0.25s", 
          "--animation-input": "0.2s", 
          "--btn-text-case": "lowercase", 
          "--btn-focus-scale": "0.95", 
          "--border-btn": "5px", 
        },
      },
    ],
  },
};
