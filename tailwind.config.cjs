module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#441752",
        secondary: "#3A3960",
        dark:"#4DA1A9",
        analogous2 :"#00d4ff"
       
      },

      screens: {
        xs: "375px",
        xl2: "1200px",
        xl3: "1440px",
      },
    },

    fontFamily: {
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
