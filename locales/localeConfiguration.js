import es from './es.json'
import ru from './ru.json'
import nl from './nl.json'
import zh from './zh.json'
import sv from './sv.json'
import fr from './fr.json'

const configurations = {
  es: {
    locales: {
      code: 'es',
      iso: 'es-ES'
    },
    defaultLocale: 'es',
    messages: {es}
  },
  sv: {
    locales: {
      code: 'sv',
      iso: 'sv'
    },
    defaultLocale: 'sv',
    messages: {sv}
  },

  ru: {
    locales: {
      code: 'ru',
      iso: 'ru-RU'
    },
    defaultLocale: 'ru',
    messages: {ru}
  },

  zh: {
    locales: {
      code: 'zh',
      iso: 'zh-CN'
    },
    defaultLocale: 'zh',
    messages: {zh}
  },
  nl: {
    locales: {
      code: 'nl',
      iso: 'nl-NL'
    },
    defaultLocale: 'nl',
    messages: {nl}
  },
  fr: {
    locales: {
      code: 'fr',
      iso: 'fr-FR'
    },
    defaultLocale: 'fr',
    messages: {fr}
  }

}

export default configurations[process.env.LOCALE]
