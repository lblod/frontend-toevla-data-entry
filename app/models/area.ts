import Model, { attr } from '@ember-data/model';

export default class Area extends Model {
  @attr('number') width: boolean | null | undefined;
  @attr('number') height: boolean | null | undefined;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'area': Area;
  }
}
