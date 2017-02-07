import { I18n, Translate, Localize } from 'react-i18nify';

export { I18n, Translate, Localize };

export {
  SET_LOCALE,
  LOAD_TRANSLATIONS,
  setLocale,
  loadTranslations,
} from './actions';

export { default as i18nReducer } from './reducer';

export function syncTranslationWithStore(store) {
  I18n.setTranslationsGetter(() => store.getState().i18n.translations || {});
  I18n.setLocaleGetter(() => store.getState().i18n.locale || '');
}
