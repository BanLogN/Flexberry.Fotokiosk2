import {
  defineNamespace,
  defineProjections,
  Model as ПечатьФОТОMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk2-печать-ф-о-т-о';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПечатьФОТОMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
