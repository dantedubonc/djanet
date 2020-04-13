import es from '../locales/es'
import ru from '../locales/ru'

export default {
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
    messages: { ru, es }
  }
}
