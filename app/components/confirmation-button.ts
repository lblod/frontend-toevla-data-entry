import Component from '@glimmer/component';
import { statechart } from 'ember-statecharts/computed';
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
    },
      {
        actions: {
          trigger(context: ConfirmationButton) {
            if (context.args.onConfirm)
              context.args.onConfirm();
          }
        }
      }
  )
  statechart: Statechart;
}
