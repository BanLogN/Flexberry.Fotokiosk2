import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISFotokiosk2ПечатьФОТОLForm from './forms/i-i-s-fotokiosk2-печать-ф-о-т-о-l';
import IISFotokiosk2УслугиLForm from './forms/i-i-s-fotokiosk2-услуги-l';
import IISFotokiosk2ПечатьФОТОEForm from './forms/i-i-s-fotokiosk2-печать-ф-о-т-о-e';
import IISFotokiosk2УслугиEForm from './forms/i-i-s-fotokiosk2-услуги-e';
import IISFotokiosk2ПечатьФОТОModel from './models/i-i-s-fotokiosk2-печать-ф-о-т-о';
import IISFotokiosk2УслугиModel from './models/i-i-s-fotokiosk2-услуги';
import IISFotokiosk2ФотоModel from './models/i-i-s-fotokiosk2-фото';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-fotokiosk2-печать-ф-о-т-о': IISFotokiosk2ПечатьФОТОModel,
    'i-i-s-fotokiosk2-услуги': IISFotokiosk2УслугиModel,
    'i-i-s-fotokiosk2-фото': IISFotokiosk2ФотоModel
  },

  'application-name': 'Fotokiosk2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Fotokiosk2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fotokiosk2',
          title: 'Fotokiosk2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'ф-о-т-о': {
          caption: 'ФОТО',
          title: 'ФОТО',
          'i-i-s-fotokiosk2-печать-ф-о-т-о-l': {
            caption: 'Печать ФОТО',
            title: ''
          }
        },
        услуги: {
          caption: 'Услуги',
          title: 'Услуги',
          'i-i-s-fotokiosk2-услуги-l': {
            caption: 'Услуги',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-fotokiosk2-печать-ф-о-т-о-l': IISFotokiosk2ПечатьФОТОLForm,
    'i-i-s-fotokiosk2-услуги-l': IISFotokiosk2УслугиLForm,
    'i-i-s-fotokiosk2-печать-ф-о-т-о-e': IISFotokiosk2ПечатьФОТОEForm,
    'i-i-s-fotokiosk2-услуги-e': IISFotokiosk2УслугиEForm
  },

});

export default translations;
