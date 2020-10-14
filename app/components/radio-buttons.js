import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

export default class RadioButtonsComponent extends Component {
  @tracked checked = null;

  @action
  toggle() {
    this.checked = !this.checked;
  }

  @action
  select(name, value) {
    this.checked = name;

    if( this.args.onSelect ) {
      this.args.onSelect( value );
    }
  }
}
