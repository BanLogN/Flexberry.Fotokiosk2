import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипБумагиEnum from '../enums/i-i-s-fotokiosk2-тип-бумаги';

export default FlexberryEnum.extend({
  enum: ТипБумагиEnum,
  sourceType: 'IIS.Fotokiosk2.ТипБумаги'
});
