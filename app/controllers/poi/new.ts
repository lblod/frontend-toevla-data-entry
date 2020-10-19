import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import Store from '@ember-data/store';
import Statechart from 'ember-statecharts/utils/statechart';
import PointOfInterest from 'frontend-toevla-data-entry/models/point-of-interest';
import { handler, guard, statechart } from 'frontend-toevla-data-entry/utils/rockin-statechart';

export default class PoiNew extends Controller {
  @tracked label: string | null = null;
  @service store!: Store;

  @statechart(
    {
      initial: "init",
      states: {
        init: {
          entry: ["resetState"],
          on: {
            CREATE: {
              target: "saving",
              cond: 'hasLabel'
            }
          }
        },
        saving: {
          onEntry: ["launchSave"],
          on: {
            SAVED: "done",
            FAIL: "failed"
          }
        },
        failed: {
          on: {
            RETRY: "saving",
            RESET: "init"
          }
        },
        done: {
          onEntry: ["showEntity"],
          on: {
            FAIL: "failed",
            RESET: "init"
          }
        }
      }
    }
  ) statechart!: Statechart;

  @handler()
  resetState() {
    this.label = null;
    this.locationString = null;
  }

  @handler()
  async launchSave(){
    const label = this.label;
    const locationString = this.locationString;
    try {
      const poiRecord =
        await this
          .store
          .createRecord("point-of-interest", { label, locationString })
          .save();

      const widget = await this
        .store
        .createRecord("widget", { "pointOfInterest": poiRecord })
        .save();
      this.statechart.send("SAVED", { record: poiRecord })
    } catch (e) {
      this.statechart.send("FAIL");
    }
  }

  @handler()
  showEntity({ record }: { record: PointOfInterest }) {
    try {
      this.transitionToRoute('poi.show.experiences', record);
      this.statechart.send("RESET");
    } catch (e) {
      this.statechart.send("FAIL");
    }
  }

  @guard()
  get hasLabel() {
    return this.label && this.label !== "";
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'poi/new': PoiNew;
  }
}
