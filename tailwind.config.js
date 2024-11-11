/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      // Default theme will apply whichever is first
      "night", // Night theme
      "light", // Light mode
      "dark", // Dark theme
      "cupcake", // Example of a predefined theme
      // You can add custom themes as well, like below:
      {
        mytheme: {
          primary: "#1d4ed8", // Blue
          secondary: "#f59e0b", // Orange
          accent: "#10b981", // Green
          neutral: "#3d4451", // Gray
          "base-100": "#ffffff", // White
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
