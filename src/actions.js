export const LOAD_TRANSLATIONS = 'loadTranslation';
export const loadTranslations = (translations) => {
  return {
    type: LOAD_TRANSLATIONS,
    translations
  }
};

export const SET_LOCALE = 'setLocal';
export const setLocale = (locale) => {
  return {
    type: SET_LOCALE,
    locale
  }
};
