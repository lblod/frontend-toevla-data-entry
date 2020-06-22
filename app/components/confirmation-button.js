export default class ConfirmationButton extends Component {
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
  ) statechart;

  @handler("trigger")
  executeOnConfirm(){
    this.args.onConfirm();
  }
}
