import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.ф-о-т-о.caption'),
          title: i18n.t('forms.application.sitemap.ф-о-т-о.title'),
          children: [{
            link: 'i-i-s-fotokiosk2-печать-ф-о-т-о-l',
            caption: i18n.t('forms.application.sitemap.ф-о-т-о.i-i-s-fotokiosk2-печать-ф-о-т-о-l.caption'),
            title: i18n.t('forms.application.sitemap.ф-о-т-о.i-i-s-fotokiosk2-печать-ф-о-т-о-l.title'),
            icon: 'building',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.услуги.caption'),
          title: i18n.t('forms.application.sitemap.услуги.title'),
          children: [{
            link: 'i-i-s-fotokiosk2-услуги-l',
            caption: i18n.t('forms.application.sitemap.услуги.i-i-s-fotokiosk2-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.услуги.i-i-s-fotokiosk2-услуги-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})