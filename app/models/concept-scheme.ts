import Model, { attr, hasMany } from '@ember-data/model';
import Concept from 'frontend-toevla-data-entry/models/concept';

export default class ConceptScheme extends Model {
  @attr() title: string | undefined;
  @hasMany("concept") topLevelNodes: Concept[] | undefined;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'concept-scheme': ConceptScheme;
  }
}
