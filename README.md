# react-redux-i18n
A binding library for redux to react-i18nify

## Usage

First install the package:
```
npm i react-redux-i18n --save
```

Next, load the translations to be used, for example in `app.js`:
```javascript
import { createStore, combineReducers } from 'redux';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
import reducers from './reducers';

const store=  createStore(
  combineReducers({
    ...reducers,
    i18n: i18nReducer
  });
);
syncTranslationWithStore(store)
store.dispatch(loadTranslations(translationsObject);
store.dispatch(setLocale('en');

```
Then you you can use all the component and utilities of react-i18nify by importing them directly from this lib.
