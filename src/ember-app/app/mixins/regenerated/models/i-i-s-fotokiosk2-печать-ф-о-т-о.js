import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСоздания: DS.attr('date', { defaultValue() { return new Date(); } }),
  способОплаты: DS.attr('i-i-s-fotokiosk2-тип-оплаты'),
  фото: DS.hasMany('i-i-s-fotokiosk2-фото', { inverse: 'печатьФОТО', async: false })
});

export let ValidationRules = {
  датаСоздания: {
    descriptionKey: 'models.i-i-s-fotokiosk2-печать-ф-о-т-о.validations.датаСоздания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  способОплаты: {
    descriptionKey: 'models.i-i-s-fotokiosk2-печать-ф-о-т-о.validations.способОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фото: {
    descriptionKey: 'models.i-i-s-fotokiosk2-печать-ф-о-т-о.validations.фото.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПечатьФОТОE', 'i-i-s-fotokiosk2-печать-ф-о-т-о', {
    датаСоздания: attr('Дата создания', { index: 0 }),
    способОплаты: attr('Способ оплаты', { index: 1 }),
    фото: hasMany('i-i-s-fotokiosk2-фото', 'Фото', {
      услуги: belongsTo('i-i-s-fotokiosk2-услуги', 'Услуги', {
        наименование: attr('Наименование', { index: 1, hidden: true }),
        цена: attr('Цена', { index: 4 })
      }, { index: 0, displayMemberPath: 'наименование' }),
      количество: attr('Количество', { index: 2 }),
      бумага: attr('Бумага', { index: 3 })
    })
  });

  modelClass.defineProjection('ПечатьФОТОL', 'i-i-s-fotokiosk2-печать-ф-о-т-о', {
    датаСоздания: attr('Дата создания', { index: 0 }),
    способОплаты: attr('Способ оплаты', { index: 1 })
  });
};
