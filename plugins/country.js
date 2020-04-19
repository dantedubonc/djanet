import Vue from 'vue'
import countries from 'i18n-iso-countries'

countries.registerLocale(require("i18n-iso-countries/langs/nl.json"));
countries.registerLocale(require("i18n-iso-countries/langs/es.json"));
countries.registerLocale(require("i18n-iso-countries/langs/ru.json"));
countries.registerLocale(require("i18n-iso-countries/langs/zh.json"));
countries.registerLocale(require("i18n-iso-countries/langs/sv.json"));
countries.registerLocale(require("i18n-iso-countries/langs/fr.json"));

Vue.prototype.$countries = countries;
