import ApplicationSerializer from './application';

export default class ExperienceTreeNodeScoreSerializer extends ApplicationSerializer {
  shouldSerializeHasMany(snapshot, key/*, relationshipType*/) {
    if (key == 'images')
      return true;
    else
      return super.shouldSerializeHasMany(...arguments);
  }
}
