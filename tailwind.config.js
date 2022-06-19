/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
  safelist: [
    "prose",
    "prose-xl",
    "m-auto",
    "prose-a:text-red-400",
    "text-left",
    "dark:text-gray-200",
    "dark:prose-strong:text-gray-200",
  ],
};
