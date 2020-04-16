import Vue from 'vue'
import countries from 'i18n-iso-countries'

countries.registerLocale(require("i18n-iso-countries/langs/nl.json"));
countries.registerLocale(require("i18n-iso-countries/langs/es.json"));
countries.registerLocale(require("i18n-iso-countries/langs/ru.json"));
countries.registerLocale(require("i18n-iso-countries/langs/da.json"));

Vue.prototype.$countries = countries;