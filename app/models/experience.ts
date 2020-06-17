import Model, { attr, belongsTo } from '@ember-data/model';
import PointOfInterest from './point-of-interest';

export default class Experience extends Model {
  @belongsTo('point-of-interest') pointOfInterest!: PointOfInterest;
  @attr('string') title: string | null | undefined;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'experience': Experience;
  }
}
