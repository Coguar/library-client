require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  mainRoute: process.env.MAIN_ROUTE || 'testItem',
  app: {
    title: 'Dictionary',
    description: 'Dictionary',
    head: {
      titleTemplate: 'Dictionary',
      meta: [
        {name: 'description', content: 'Dictionary'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Dictionary'},
        {property: 'og:image', content: ''},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Dictionary'},
        {property: 'og:description', content: 'Dictionary'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: ''},
        {property: 'og:creator', content: ''},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
