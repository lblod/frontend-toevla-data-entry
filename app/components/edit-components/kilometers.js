import { action } from '@ember/object';
import MetersComponent from './meters';

export default class EditComponentsKilometersComponent extends MetersComponent {
  get kilometerValue() {
    return this.currentValue / 1000.0;
  }

  @action
  inputValueChanged( event, value ) {
    event.preventDefault();
    this.currentValue = Math.round( event.target.valueAsNumber * 1000 );
  }
}
