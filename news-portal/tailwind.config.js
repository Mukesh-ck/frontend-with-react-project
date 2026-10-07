export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ink: "#17202A", brand: "#0E7C86", paper: "#F5F7F8" },
      fontFamily: {
        serif: ["Newsreader", "Georgia", "serif"],
        sans: ["Public Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
