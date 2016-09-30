'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.i18nReducer = exports.loadTranslations = exports.setLocale = exports.LOAD_TRANSLATIONS = exports.SET_LOCALE = exports.Localize = exports.Translate = exports.I18n = undefined;

var _actions = require('./actions');

Object.defineProperty(exports, 'SET_LOCALE', {
  enumerable: true,
  get: function get() {
    return _actions.SET_LOCALE;
  }
});
Object.defineProperty(exports, 'LOAD_TRANSLATIONS', {
  enumerable: true,
  get: function get() {
    return _actions.LOAD_TRANSLATIONS;
  }
});
Object.defineProperty(exports, 'setLocale', {
  enumerable: true,
  get: function get() {
    return _actions.setLocale;
  }
});
Object.defineProperty(exports, 'loadTranslations', {
  enumerable: true,
  get: function get() {
    return _actions.loadTranslations;
  }
});

var _reducer = require('./reducer');

Object.defineProperty(exports, 'i18nReducer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reducer).default;
  }
});
exports.syncTranslationWithStore = syncTranslationWithStore;

var _reactI18nify = require('react-i18nify');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.I18n = _reactI18nify.I18n;
exports.Translate = _reactI18nify.Translate;
exports.Localize = _reactI18nify.Localize;
function syncTranslationWithStore(store) {
  _reactI18nify.I18n.setTranslationsGetter(function () {
    try {
      return store.getState().i18n.translations;
    } catch (e) {
      console.error('Error getting translations from store!');
    }
  });
  _reactI18nify.I18n.setLocaleGetter(function () {
    try {
      return store.getState().i18n.locale;
    } catch (e) {
      console.error('Error getting locale from store!');
    }
  });
}