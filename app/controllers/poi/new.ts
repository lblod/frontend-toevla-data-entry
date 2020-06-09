import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import Store from '@ember-data/store';
import { statechart } from 'ember-statecharts/computed'
import Statechart from 'ember-statecharts/utils/statechart';
import PointOfInterest from 'frontend-toevla-data-entry/app/models/point-of-interest';

export default class PoiNew extends Controller {
  @tracked label: string | null = null;

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
            FAIL: "failed"
          }
        }
      }
    },
    {
      actions: {
        resetState(context: PoiNew) {
          context.label = null;
        },
        async launchSave(context: PoiNew) {
          const label = context.label as string;
          try {
            const record =
              await context
                .store
                .createRecord("point-of-interest", { label })
                .save();
            context.statechart.send("SAVED", { record })
          } catch (e) {
            context.statechart.send("FAIL");
          }
        },
        showEntity(context: PoiNew, { record }: { record: PointOfInterest }) {
          try {
            context.transitionToRoute('poi.show', record);
          } catch (e) {
            context.statechart.send("FAIL");
          }
        }
      },
      guards: {
        hasLabel(context: PoiNew) {
          return context.label;
        }
      }
    }
  ) statechart!: Statechart;

  @service store!: Store;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'poi/new': PoiNew;
  }
}
