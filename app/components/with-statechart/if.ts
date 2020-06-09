import { get } from '@ember/object';
import Component from '@glimmer/component';

interface WithStatechartIfArgs {
  currentState: string
  state: string
}

export default class WithStatechartIf extends Component<WithStatechartIfArgs> {
  get isActive() : boolean {
    return this.args.state == this.args.currentState;
  }
}
