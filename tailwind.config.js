import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],    // Custom body font
        heading: ['Playfair Display', 'serif'], // Custom heading font
      },
      colors: {
        primary: "#F47D2C", // Main Orange
        primaryHover: "#E56B17", // Darker Orange for Hover
        secondary: "#2C9DF4", // Bright Blue Accent
        secondaryHover: "#1478D4", // Darker Blue for Hover
        background: "#FFF8F2", // Soft Background
        surface: "#FFFFFF", // White Surface (Cards, etc.)
        mutedBackground: "#FFFAF5", // Muted Alternate Background
        heading: "#333333", // Heading Text Color
        body: "#555555", // Body Text Color
        muted: "#888888", // Muted Text (e.g., Placeholder)
        footer: "#222222", // Footer Dark Background
        success: "#4CAF50", // Success Green
        warning: "#FF9800", // Warning Orange
        info: "#2196F3", // Info Blue
      },
    },
  },
  plugins: [daisyui],
};
