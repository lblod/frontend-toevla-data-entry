import JSONAPISerializer from '@ember-data/serializer/json-api';
import keepOnlyChanged from 'ember-data-change-tracker/mixins/keep-only-changed';

export default class ApplicationSerializer extends JSONAPISerializer.extend(keepOnlyChanged) { }
