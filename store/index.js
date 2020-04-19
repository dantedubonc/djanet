export const state = () => ({
  locales: ['nl', 'es', 'ru', 'zh', 'sv', 'fr'],
  locale: 'sv'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
