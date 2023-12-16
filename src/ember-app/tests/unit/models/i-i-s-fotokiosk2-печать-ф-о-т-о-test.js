import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-fotokiosk2-печать-ф-о-т-о', 'Unit | Model | i-i-s-fotokiosk2-печать-ф-о-т-о', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-fotokiosk2-печать-ф-о-т-о',
    'model:i-i-s-fotokiosk2-услуги',
    'model:i-i-s-fotokiosk2-фото',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
