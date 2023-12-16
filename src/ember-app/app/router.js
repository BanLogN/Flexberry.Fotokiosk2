import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-fotokiosk2-печать-ф-о-т-о-l');
  this.route('i-i-s-fotokiosk2-печать-ф-о-т-о-e',
  { path: 'i-i-s-fotokiosk2-печать-ф-о-т-о-e/:id' });
  this.route('i-i-s-fotokiosk2-печать-ф-о-т-о-e.new',
  { path: 'i-i-s-fotokiosk2-печать-ф-о-т-о-e/new' });
  this.route('i-i-s-fotokiosk2-услуги-l');
  this.route('i-i-s-fotokiosk2-услуги-e',
  { path: 'i-i-s-fotokiosk2-услуги-e/:id' });
  this.route('i-i-s-fotokiosk2-услуги-e.new',
  { path: 'i-i-s-fotokiosk2-услуги-e/new' });
});

export default Router;
