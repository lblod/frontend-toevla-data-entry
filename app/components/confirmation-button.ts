import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import { statechart, matchesState } from 'ember-statecharts/computed';
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

  @matchesState('init') isInit!: boolean;
  @matchesState('unconfirmed') isUnconfirmed!: boolean;
  @matchesState('confirmed') isConfirmed!: boolean;

  @action click(event: Event) {
    event.preventDefault();
    this.statechart.send("CLICK");
  }

  @action cancelClick(event: Event) {
    event.preventDefault();
    this.statechart.send("CANCEL");
  }
}
