import { I18n } from './index';

export const LOAD_TRANSLATIONS = 'loadTranslation';
export const loadTranslations = translations => dispatch => {
  I18n.forceComponentsUpdate();
  dispatch({
    type: LOAD_TRANSLATIONS,
    translations,
  });
};

export const SET_LOCALE = 'setLocal';
export const setLocale = locale => dispatch => {
  I18n.forceComponentsUpdate();
  dispatch({
    type: SET_LOCALE,
    locale,
  });
};
