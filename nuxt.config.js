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
  router: {
   middleware: 'i18n'
  },
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
    '~/plugins/i18n.js',
    '~/plugins/country.js',
    { src: '~/plugins/ga/ga.js', mode: 'client' },
    '~plugins/vue-js-modal.js'
  ],
  generate: {
    routes: ['/', '/es', '/en', '/ru','/nl']
  },

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // [
    //   'nuxt-i18n',
    //   {
    //     locales: [         
    //       {
    //         code: 'es',
    //         domain: 'es.mydomain.com'
    //       },
    //       {
    //         code: 'ru',
    //         domain: 'ru.mydomain.com'
    //       }
    //     ],
    //     defaultLocale: 'es',
    //     vueI18n: {
    //       fallbackLocale: 'es',
    //       messages: {
    //         es: require('./locales/es.json'),
    //         ru: require('./locales/ru.json')
    //       }
    //     },
    //     differentDomains: true
    //   }
    // ],
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
