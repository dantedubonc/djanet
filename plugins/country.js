import Vue from 'vue'
import countries from 'i18n-iso-countries'

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
countries.registerLocale(require("i18n-iso-countries/langs/es.json"));
countries.registerLocale(require("i18n-iso-countries/langs/ru.json"));

Vue.prototype.$countries = countries;