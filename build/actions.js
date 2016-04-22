'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOAD_TRANSLATIONS = exports.LOAD_TRANSLATIONS = 'loadTranslation';
var loadTranslations = exports.loadTranslations = function loadTranslations(translations) {
  return {
    type: LOAD_TRANSLATIONS,
    translations: translations
  };
};

var SET_LOCALE = exports.SET_LOCALE = 'setLocal';
var setLocale = exports.setLocale = function setLocale(locale) {
  return {
    type: SET_LOCALE,
    locale: locale
  };
};