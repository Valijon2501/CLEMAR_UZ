/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // qo'shildi: xs breakpoint
        sm: "640px", // mavjud sm breakpoint
        md: "768px", // mavjud md breakpoint
        lg: "1024px", // mavjud lg breakpoint
        xl: "1280px", // mavjud xl breakpoint
        "2xl": "1536px", // mavjud 2xl breakpoint
        "3xl": "1920px", // qo'shildi: 3xl breakpoint
      },
    },
  },
  plugins: [],
};
