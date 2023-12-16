import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  бумага: DS.attr('i-i-s-fotokiosk2-тип-бумаги'),
  количество: DS.attr('number'),
  услуги: DS.belongsTo('i-i-s-fotokiosk2-услуги', { inverse: null, async: false }),
  печатьФОТО: DS.belongsTo('i-i-s-fotokiosk2-печать-ф-о-т-о', { inverse: 'фото', async: false })
});

export let ValidationRules = {
  бумага: {
    descriptionKey: 'models.i-i-s-fotokiosk2-фото.validations.бумага.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-fotokiosk2-фото.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  услуги: {
    descriptionKey: 'models.i-i-s-fotokiosk2-фото.validations.услуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  печатьФОТО: {
    descriptionKey: 'models.i-i-s-fotokiosk2-фото.validations.печатьФОТО.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФотоE', 'i-i-s-fotokiosk2-фото', {
    услуги: belongsTo('i-i-s-fotokiosk2-услуги', 'Услуги', {
      наименование: attr('Наименование', { index: 1, hidden: true }),
      цена: attr('Цена', { index: 4 })
    }, { index: 0, displayMemberPath: 'наименование' }),
    количество: attr('Количество', { index: 2 }),
    бумага: attr('Бумага', { index: 3 })
  });
};
