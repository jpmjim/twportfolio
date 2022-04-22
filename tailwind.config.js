module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      Images: {
        'logo': "url('./public/img/log1.png')",
        'me': "url('./public/img/yo.jpg')"
      },
      colors: {
        'primary': "#f8f8f8",
        'secundary': "#f07684"
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}
