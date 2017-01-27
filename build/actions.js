'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = exports.SET_LOCALE = exports.loadTranslations = exports.LOAD_TRANSLATIONS = undefined;

var _index = require('./index');

var LOAD_TRANSLATIONS = exports.LOAD_TRANSLATIONS = 'loadTranslation';
var loadTranslations = exports.loadTranslations = function loadTranslations(translations) {
  return function (dispatch) {
    dispatch({
      type: LOAD_TRANSLATIONS,
      translations: translations
    });
    _index.I18n.forceComponentsUpdate();
  };
};

var SET_LOCALE = exports.SET_LOCALE = 'setLocal';
var setLocale = exports.setLocale = function setLocale(locale) {
  return function (dispatch) {
    dispatch({
      type: SET_LOCALE,
      locale: locale
    });
    _index.I18n.forceComponentsUpdate();
  };
};