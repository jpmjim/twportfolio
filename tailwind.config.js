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
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}
