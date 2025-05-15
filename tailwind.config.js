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
        primaryColor: "#F47D2C", // Main Orange
        primaryHoverColor: "#E56B17", // Darker Orange for Hover
        secondaryColor: "#2C9DF4", // Bright Blue Accent
        secondaryHoverColor: "#1478D4", // Darker Blue for Hover
        backgroundColor: "#FFF8F2", // Soft Background
        mutedBackgroundColor: "#FFFAF5", // Muted Alternate Background
        whiteColor: "#FFFFFF", // White Surface (Cards, etc.)
        headingColor: "#333333", // Heading Text Color
        textColor: "#555555", // Body Text Color
        mutedColor: "#888888", // Muted Text (e.g., Placeholder)
        footerColor: "#222222", // Footer Dark Background
        successColor: "#4CAF50", // Success Green
        warningColor: "#FF9800", // Warning Orange
        infoColor: "#2196F3", // Info Blue
      },
    },
  },
  plugins: [daisyui],
};
