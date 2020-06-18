import Component from '@glimmer/component';
import { statechart, handler } from 'frontend-toevla-data-entry/utils/rockin-statechart';
import Statechart from 'ember-statecharts/utils/statechart';

interface ConfirmationButtonArgs {
  onConfirm: () => any;
  state: string;
}

export default class ConfirmationButton extends Component<ConfirmationButtonArgs> {
  @statechart(
    {
      initial: 'init',
      states: {
        init: {
          on: {
            CLICK: 'unconfirmed'
          }
        },
        unconfirmed: {
          on: {
            CLICK: 'confirmed',
            CANCEL: 'init'
          }
        },
        confirmed: {
          entry: ['trigger']
        }
      }
    }
  )
  statechart!: Statechart;

  @handler("trigger")
  executeOnConfirm(){
    this.args.onConfirm();
  }
}
