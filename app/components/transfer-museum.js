import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { handler, statechart } from 'frontend-toevla-data-entry/utils/rockin-statechart';
import ENV from 'frontend-toevla-data-entry/config/environment';

export default class TransferMuseumComponent extends Component {
  @tracked showModal;
  @tracked didSend;

  @statechart({
    initial: "init",
    states: {
      init: {
        on: { REQUEST_TRANSFER: "requestingTransfer" }
      },
      requestingTransfer: {
        onEntry: ["requestTransfer"],
        on: {
          TRANSFER_FINISHED: "informTransferFinished",
          FAIL: "fail"
        }
      },
      informTransferFinished: {
        on: {
          REQUEST_TRANSFER: "requestingTransfer"
        }
      },
      fail: {}
    }
  })
  transferChart;

  @handler()
  async requestTransfer() {
    try {
      const resp = await fetch(this.args.path, { method: 'POST' });
      const body = await resp.json();
      if (resp.status !== 500 &&  resp.status !== 403) {
        this.transferChart.send("TRANSFER_FINISHED");
      } else {
        if (!ENV.APP.silenceTransferFailureErrors)
          this.transferChart.send("FAIL");
      }
    } catch (e) {
      if( !ENV.APP.silenceTransferFailureErrors )
        this.transferChart.send("FAIL");
    }
  }
}
