/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      maxWidth: {
        "8xl": "1620px",
      },
      colors: {
        primary: "#41C717",
        secondary: "#1D2931",
        accent: "#3E0577",
        surface: "#F8F8F8",
        muted: "#666666",
        border: "#DDDDDD",
        brand: {
          text: "#1F1F1F",
        },
      },
      borderRadius: {
        custom: "16px",
        custom2: "18px",
        custom3: "20px",
        pill: "9999px",
      },
    },
  },
  plugins: [],
};
