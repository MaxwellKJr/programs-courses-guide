module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-section": "url('/img/UnimaLibrary.jpg')",
        "footer-texture": "url('/img/UnimaLogo.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
