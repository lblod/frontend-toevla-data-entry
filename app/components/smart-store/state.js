import { next } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class SmartStoreStateComponent extends Component {
  @service smartStore;

  // We show the isSaving state whenever items are being sent to the
  // backend.
  get isSaving() {
    return this.smartStore.executingUpdates.length > 0;
  }

  // We show the waiting state whenever there are outstanding changes
  // that haven't been sent to the backend yet.
  get isWaiting() {
    return this.smartStore.outstandingUpdates.length > 0
      && !this.isSaving;
  }

  // We execute an updating timer (sorry for the spaghetti code, it's
  // local to this getter).  The updating timer detects a state change
  // from any number of executing requests to no executing requests and
  // will render the saved icon during a certain timeframe iff there are
  // no saving or waiting items popping in during the same timeframe.
  @tracked savedTimerRunning = false;
  @tracked lastExecutingUpdatesState = 0;
  savedTimer = null;
  get hasSaved() {
    // state changed to zero
    if (this.smartStore.executingUpdates.length == 0
      && this.lastExecutingUpdatesState !== 0) {
      next(() => {
        this.savedTimerRunning = true;
        this.lastExecutingUpdatesState = 0;
        if (this.savedTimer) {
          clearTimeout(this.savedTimer);
        }
        this.savedTimer = setTimeout(
          () => this.savedTimerRunning = false,
          500);
      });
    }
    // state changed (but not to zero)
    else if (this.lastExecutingUpdatesState !== this.smartStore.executingUpdates.length) {
      next( () => this.lastExecutingUpdatesState = this.smartStore.executingUpdates.length );
    }

    return this.savedTimerRunning && !this.isWaiting && !this.isSaving;
  }
}
