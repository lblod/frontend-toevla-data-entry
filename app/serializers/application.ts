import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  serializeAttribute(snapshot: any, json: any, key: any, attributes: any) {
    if (key !== 'uri')
      super.serializeAttribute(snapshot, json, key, attributes);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your serializers.
declare module 'ember-data/types/registries/serializer' {
  export default interface SerializerRegistry {
    'application': Application;
  }
}
