import { LOAD_TRANSLATIONS, SET_LOCALE } from './actions';

export default (state = {}, action) => {
  switch (action.type) {
    case LOAD_TRANSLATIONS:
      return {
        ...state,
        translations: action.translations
      };
      break;
    case SET_LOCALE:
      return {
        ...state,
        locale: action.locale
      };
      break;

    default:
      return state;
  }
};