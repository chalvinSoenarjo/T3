/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      '@layer utilities': {
        '.hover:bg-base-200': ['hover'],
      },
      // Add the daisyui theme configuration here
      daisyui: {
        themes: [
          {
            mytheme: {
              primary: "#c7ecfc",
              secondary: "#86e89b",
              accent: "#fff1bf",
              neutral: "#25192e",
              "base-100": "#442749",
              info: "#6db0f3",
              success: "#21cab9",
              warning: "#ed970c",
              error: "#f41a49",
            },
          },
        ],
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
};

module.exports = config;
