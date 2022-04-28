module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ban1': "url('/public/img/ban1.jpg')",
        'ban2': "url('/public/img/ban2.png')",
        'ban3': "url('/public/img/ban3.png')",
        'ban4': "url('/public/img/ban24.png')",
        'logo': "url('./public/img/log1.png')",
        'me': "url('./public/img/yo.jpg')"
      },
      colors: {
        'primary': "#fe5353;",
        'secundary': "#f07684"
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}
