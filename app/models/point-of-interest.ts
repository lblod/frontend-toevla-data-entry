import Model, { attr } from '@ember-data/model';

export default class PointOfInterest extends Model {
  @attr('string') label: string | undefined;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'point-of-interest': PointOfInterest;
  }
}
