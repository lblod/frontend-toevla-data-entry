import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class VoMuFileCardcomponent extends Component {
  @action
  delete() {
    if( this.args.onDelete ) {
      this.args.onDelete( this.args.file );
    }
  }
}
