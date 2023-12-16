import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПечатьФОТОMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk2-печать-ф-о-т-о';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПечатьФОТОMixin, Validations, {
});

defineProjections(Model);

export default Model;
