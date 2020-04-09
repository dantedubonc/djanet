export const state = () => ({
  locales: ['en', 'es', 'ru'],
  locale: 'es'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
