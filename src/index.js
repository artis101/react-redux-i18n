import { I18n, Translate, Localize, setTranslationsGetter, setLocaleGetter, forceComponentsUpdate } from 'react-i18nify';

export { I18n, Translate, Localize, setTranslationsGetter, setLocaleGetter, forceComponentsUpdate };

export {
  SET_LOCALE,
  LOAD_TRANSLATIONS,
  setLocale,
  loadTranslations,
} from './actions';

export { default as i18nReducer } from './reducer';

export function syncTranslationWithStore(store) {
  setTranslationsGetter(() => store.getState().i18n.translations || {});
  setLocaleGetter(() => store.getState().i18n.locale || '');
}
