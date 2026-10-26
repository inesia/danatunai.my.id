import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Poppins"', '"Plus Jakarta Sans"', "sans-serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      colors: {
        dana: {
          navy: "#0A335D",
          hover: "#082849",
          dark: "#061F38",
          light: "#EEF4FA",
        },
        tunai: {
          green: "#049851",
          hover: "#067A42",
          dark: "#036E3A",
          light: "#E8F8F0",
        },
        slate: {
          850: "#151F32",
          950: "#080D1A",
        },
      },
      borderRadius: {
        card: "12px",
        modal: "20px",
      },
      backgroundImage: {
        "signature-gradient": "linear-gradient(135deg, #0A335D 0%, #049851 100%)",
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgba(10, 51, 93, 0.05), 0 1px 2px -1px rgba(10, 51, 93, 0.05)",
        card: "0 4px 20px -2px rgba(10, 51, 93, 0.06)",
        modal: "0 20px 25px -5px rgba(10, 51, 93, 0.1), 0 8px 10px -6px rgba(10, 51, 93, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
