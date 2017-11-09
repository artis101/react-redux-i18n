# react-redux-i18n

A binding library for redux to react-i18nify

## Usage

First install the package.

Using `npm`:
```
npm i react-redux-i18n --save
```

Using `yarn`:
```
yarn add react-redux-i18n
```

`redux-thunk` is an implicit dependency, so you need it installed and included in your project.

To learn more about `redux-thunk`, refer to it's GitHub page:
https://github.com/gaearon/redux-thunk

Next, load the translations to be used, for example in `app.js` or in your apps entry point:

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
    },
    export: 'Export %{count} items',
    export_0: 'Nothing to export',
    export_1: 'Export %{count} item',
    two_lines: 'Line 1<br />Line 2',
    literal_two_lines: 'Line 1\
Line 2'
  },
  nl: {
    application: {
      title: 'Toffe app met i18n!',
      hello: 'Hallo, %{name}!'
    },
    date: {
      long: 'D MMMM YYYY'
    },
    export: 'Exporteer %{count} dingen',
    export_0: 'Niks te exporteren',
    export_1: 'Exporteer %{count} ding',
    two_lines: 'Regel 1<br />Regel 2',
    literal_two_lines: 'Regel 1\
Regel 2'
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

**NB!** Please note that reducer's name must be `i18n`! Make sure your project's reducers don't clash with it.


## Components

The easiest way to translate or localize in your React components is by using the `Translate` and `Localize` components,
directly exported from `react-i18nify` package:

```javascript
var React = require('react');
var Translate = require('react-redux-i18n').Translate;
var Localize = require('react-redux-i18n').Localize;

var AwesomeComponent = React.createClass({
  render: function() {
    return (
      <div>
        <Translate value="application.title"/>
          // => returns '<span>Toffe app met i18n!</span>' for locale 'nl'
        <Translate value="application.title" style={{ fontWeight: 'bold', fontSize: '14px' }} />
        // => returns '<span style="font-weight:bold;font-size:14px;">Toffe app met i18n!</span>' for locale 'nl'
        <Translate value="application.hello" name="Aad"/>
          // => returns '<span>Hallo, Aad!</span>' for locale 'nl'
        <Localize value="2015-09-03" dateFormat="date.long"/>
          // => returns '<span>3 september 2015</span> for locale 'nl'
        <Localize value={10/3} options={{style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2}}/>
          // => returns '<span>€ 3,33</span> for locale 'nl'
        <Translate value="export" count={1} />
          // => returns '<span>Exporteer 1 ding</span> for locale 'nl'
        <Translate value="export" count={2} />
          // => returns '<span>Exporteer 2 dingen</span> for locale 'nl'
        <Translate value="two_lines" dangerousHTML />
          // => returns '<span>Regel 1<br />Regel 2</span>'
      </div>
    );
  }
});
```

## Keeping components updated

When the translation object or locale values are set, all instances of `Translate` and `Localize` will be re-rendered to
reflect the latest state. If you choose to use `I18n.l` or `I18n.t` then it up to you to handle state change.

If you'd rather not to re-render components after setting locale or translations object, then pass `false` as a second
argument to `setLocale` and/or `setTranslations`.

## Helpers

If for some reason, you cannot use the components, you can use the `I18n.t` and `I18n.l` helpers instead:

```javascript
var I18n = require('react-redux-i18n').I18n;

I18n.t('application.title'); // => returns 'Toffe app met i18n!' for locale 'nl'
I18n.t('application.hello', {name: 'Aad'}); // => returns 'Hallo, Aad!' for locale 'nl'
I18n.t('export', {count: 0}); // => returns 'Niks te exporteren' for locale 'nl'
I18n.t('application.weird_key'); // => returns 'Weird key' as translation is missing
I18n.t('application', {name: 'Aad'}); // => returns {hello: "Hallo, Aad!", title: "Toffe app met i18n!"} for locale 'nl'

I18n.l(1385856000000, { dateFormat: 'date.long' }); // => returns '1 december 2013' for locale 'nl'
I18n.l(Math.PI, { maximumFractionDigits: 2 }); // => returns '3,14' for locale 'nl'
```

## Supported localize options

The localize component and helper support all date formatting options as provided by the Javascript `moment` library. For the full list of options, see http://momentjs.com/docs/#/displaying/format/.

For number formatting, the localize component and helper support all options as provided by the Javascript built-in `Intl.NumberFormat` object. For the full list of options, see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat.

[downloads-image]: http://img.shields.io/npm/dm/react-redux-i18n.svg

[npm-url]: https://npmjs.org/package/react-redux-i18n
[npm-image]: http://img.shields.io/npm/v/react-redux-i18n.svg
