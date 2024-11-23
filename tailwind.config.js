/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["night", "dark", "light", "cupcake"],
  },
  theme: {
    container: {
      center: true, // Automatically centers the container
    },
    extend: {
      colors: {
        "custom-blue": "#2c8fdf", // Your custom color
      },
      boxShadow: {
        "custom-light": "0 4px 6px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 10px 15px rgba(0, 0, 0, 0.3)",
        "white-left": "0 0 30px -10px rgba(255, 255, 255, 0.5)",
        "custom-orange": "0 0 30px -10px rgba(255, 165, 0, 1)",
      },
    },
  },
  plugins: [require("daisyui")],
};
