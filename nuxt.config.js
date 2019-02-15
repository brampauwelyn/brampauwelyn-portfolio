const pkg = require('./package')
const work = require('./static/work.json')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:400,500,700'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cardo:400,700'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Ubuntu:400,700'}
    ],
    script: [
      { src: 'https://use.fontawesome.com/73c1fb36d0.js', async: true, defer: true }
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  /*
  ** Generate configuration 
  */
  generate: {
    // Dynamic routes
    routes: function(){
      return work.map((item) => {
        return '/work/' + item.name
      })
    }
  }
}

