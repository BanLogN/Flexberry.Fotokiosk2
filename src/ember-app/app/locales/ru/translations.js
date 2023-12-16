import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Fotokiosk2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fotokiosk2',
          title: 'Fotokiosk2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-fotokiosk2-печать-ф-о-т-о-l': IISFotokiosk2ПечатьФОТОLForm,
    'i-i-s-fotokiosk2-услуги-l': IISFotokiosk2УслугиLForm,
    'i-i-s-fotokiosk2-печать-ф-о-т-о-e': IISFotokiosk2ПечатьФОТОEForm,
    'i-i-s-fotokiosk2-услуги-e': IISFotokiosk2УслугиEForm
  },

});

export default translations;
