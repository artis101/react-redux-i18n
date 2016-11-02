# react-redux-i18n
A binding library for redux to react-i18nify

## Usage

First install the package:
```
npm i react-redux-i18n --save
```

`redux-thunk` is a dependency, so you have it installed.

Next, load the translations to be used, for example in `app.js`:
```javascript
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
import reducers from './reducers';

const translationsObject = {
  en: {
    application: {
      title: 'Awesome app with i18n!',
      hello: 'Hello, %{name}!'
    },
    date: {
      long: 'MMMM Do, YYYY'
    }
  },
  nl: {
    application: {
      title: 'Toffe app met i18n!',
      hello: 'Hallo, %{name}!'
    },
    date: {
      long: 'D MMMM YYYY'
    }
  }
};

const store =  createStore(
  combineReducers({
    ...reducers,
    i18n: i18nReducer
  }),
  applyMiddleware(thunk)
);
syncTranslationWithStore(store)
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('en'));

```

## Components

The easiest way to translate or localize in your React components is by using the `Translate` and `Localize` components:
```javascript
import React from 'react';
import { Translate, Localize } from 'react-redux-i18n';

var AwesomeComponent = React.createClass({
  render: function() {
    return (
      <div>
        <Translate value="application.title"/>
          {/* => returns '<span>Toffe app met i18n!</span>' for locale 'nl' */}
        <Translate value="application.hello" name="Aad"/>
          {/* => returns '<span>Hallo, Aad!</span>' for locale 'nl' */}
        <Localize value="2015-09-03" dateFormat="date.long"/>
          {/* => returns '<span>3 september 2015</span> for locale 'nl' */}
        <Localize value={10/3} options={{style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2}}/>
          {/* => returns '<span>€ 3,33</span> for locale 'nl' */}
      </div>
    );
  }
});
```

## Helpers

If for some reason, you cannot use the components, you can use the `I18n.t` and `I18n.l` helpers instead:
```javascript
import { I18n } from 'react-redux-i18n';

I18n.t('application.title'); // => returns 'Toffe app met i18n!' for locale 'nl'
I18n.t('application.name', {name: 'Aad'}); // => returns 'Hallo, Aad!' for locale 'nl'

I18n.l(1385856000000, { dateFormat: 'date.long' }); // => returns '1 december 2013' for locale 'nl'
I18n.l(Math.PI, { maximumFractionDigits: 2 }); // => returns '3,14' for locale 'nl'
```

For more information you can can check out the documentation of [react-i18nify](https://github.com/zoover/react-i18nify)

