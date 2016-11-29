import { I18n } from './index';

export const LOAD_TRANSLATIONS = 'loadTranslation';
export const loadTranslations = translations => dispatch => {
  dispatch({
    type: LOAD_TRANSLATIONS,
    translations,
  });
  I18n.forceComponentsUpdate();
};

export const SET_LOCALE = 'setLocal';
export const setLocale = locale => dispatch => {
  dispatch({
    type: SET_LOCALE,
    locale,
  });
  I18n.forceComponentsUpdate();
};
