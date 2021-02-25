import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  serializeAttribute( snapshot, json, key, attributes ) {
    if (key !== 'uri' && snapshot._changedAttributes[key]) {
      return super.serializeAttribute(...arguments);
    }
  }
}
