// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // adjust if needed
  theme: {
    extend: {
      scale: {
        175: "1.75",
        200: "2", // 200% zoom
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
