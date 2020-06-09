import { get } from '@ember/object';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import Statechart from 'ember-statecharts/utils/statechart';

interface WithStatechartArgs {
  state: Statechart
}

export default class WithStatechart extends Component<WithStatechartArgs> {
  get stateName(): string {
    return get( this.args.state, "currentState.value" ); // set up a computed watcher
  }

  @action send(eventName: string): any {
    this.args.state.send(eventName);
  }

  @action preventAndSend(eventName: string, event: Event): any {
    event.preventDefault();
    return this.args.state.send(eventName);
  }
}
