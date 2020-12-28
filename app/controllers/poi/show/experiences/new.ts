import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { statechart } from 'ember-statecharts/computed';
import Store from '@ember-data/store';
import Statechart from 'ember-statecharts/utils/statechart';
import PointOfInterest from 'frontend-toevla-data-entry/models/point-of-interest';
import Experience from 'frontend-toevla-data-entry/models/experience';

export default class PoiShowExperiencesNew extends Controller {
  @statechart(
    {
      initial: "init",
      states: {
        init: {
          onEntry: ["resetState"],
          on: {
            CREATE: {
              target: "creating",
              cond: "hasTitle"
            },
            CLEAR: "init"
          }
        },
        creating: {
          onEntry: ["createExperience"],
          on: {
            SUCCESS: "created",
            FAILURE: "failed"
          }
        },
        failed: {
          on: {
            RESET: "init",
          }
        },
        created: {
          onEntry: ["showExperience"],
          on: {
            FAIL: "failedTransitioning",
            RESET: "init"

          }
        },
        failedTransitioning: {}
      }
    },
    {
      actions: {
        resetState(context: PoiShowExperiencesNew) {
          context.title = null;
        },
        async createExperience(context: PoiShowExperiencesNew) {
          try {
            const title = context.title;
            const pointOfInterest = context.poi;
            const isMainExperience = context.poi.experiences.length == 0 ? true : false;
            const record =
              await context
                .store
                .createRecord( 'experience', {
                  pointOfInterest,
                  title,
                  isMainExperience
                })
                .save();
            context.statechart.send("SUCCESS", { record });
          } catch (e) {
            context.statechart.send("FAILURE");
          }
        },
        showExperience( context: PoiShowExperiencesNew, { record } : { record : Experience } ) {
          try {
            context.transitionToRoute('poi.show.experiences.index', record);
            context.statechart.send("RESET");
          } catch (e) {
            context.statechart.send("FAIL");
          }
        }
      },
      guards: {
        hasTitle(context: PoiShowExperiencesNew) {
          return context.title;
        }
      }
    }
  ) statechart!: Statechart;

  @tracked title: string | null = null;
  @service store!: Store;
  @tracked poi!: PointOfInterest;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'poi/show/experiences/new': PoiShowExperiencesNew;
  }
}
