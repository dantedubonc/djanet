const path = require("path");

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      'data-spy': 'scroll',
      'data-target': 'spy-navbar',
      'data-offset': '112',
      id: 'top'
    }
  },
  // router: {
  //  middleware: 'i18n'
  // },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~assets/css/main.css',
    '~assets/css/main-formated.css',
    '~assets/css/main-ohne-bootstrap.css',
    '~assets/css/form.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // '~/plugins/i18n.js',
    '~/plugins/country.js',
    { src: '~/plugins/ga/ga.js', mode: 'client' },
    '~plugins/vue-js-modal.js'
  ],
  // generate: {
  //   routes: ['/', '/es', '/en', '/ru']
  // },

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['nuxt-i18n'],
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/recaptcha'
  ],
  recaptcha: {
    /* reCAPTCHA options */
    hideBadge: true,
    siteKey: '6Lftg-YUAAAAAAUkCJcDmrvw2hYS2iKk_N6s3S-Z',
    version: 3
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxyHeaders: false,
    credentials: false
  },
  i18n: {
    seo: true,
    locales: [
      {
        code: 'ru',
        iso: 'ru',
        name: 'Ruso'
        //  domain: 'ru.mydomain.com'
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Español'
        // domain: 'es.mydomain.com'
      }
    ],
    defaultLocale: 'es',
    // differentDomains: true,

    vueI18n: {
      fallbackLocale: 'es',
      messages: {
        es: require(path.join(__dirname, './locales/es.json')),
        ru: require(path.join(__dirname, './locales/ru.json')),
      }
    }
  },
  /*
   ** Build configuration
   */

  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
