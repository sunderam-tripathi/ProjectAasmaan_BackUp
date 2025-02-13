/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "",
        foreground: "var(--foreground)",
        green: "#07FCOO",
        "light-green": "#56FF1B",
        "dark-green": "#011406",
        "dark-gray": "#011C10",
        black: "#000000",
        white: "#FFFFFF",
        "white-green": "#F8FFF8",
        gray: "#949292",
      },
    },
    fontFamily: {
      prestiege: ["prestige-elite-std", "Serif"],
      "base-mono": ["base-mono-wide", "sans-serif"],
      "base-mono-narrow": ["base-mono-narrow", "sans-serif"],
    },
    backgroundImage: {
      "design-catalog-promotion": "url('/background-asset.png')",
      "hero-section": "url('/background_for_about_page.png')",
    },
  },
  plugins: [require("flowbite/plugin")],
};
