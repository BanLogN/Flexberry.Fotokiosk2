import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-fotokiosk2-фото', 'Unit | Serializer | i-i-s-fotokiosk2-фото', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-fotokiosk2-фото',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-fotokiosk2-тип-бумаги',
    'transform:i-i-s-fotokiosk2-тип-оплаты',

    'model:i-i-s-fotokiosk2-печать-ф-о-т-о',
    'model:i-i-s-fotokiosk2-услуги',
    'model:i-i-s-fotokiosk2-фото',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
