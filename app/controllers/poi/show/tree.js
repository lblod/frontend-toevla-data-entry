import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';

export default class PoiShowTreeController extends Controller {
  @tracked poi;

  get sortedNodes() {
    return this.model?.topLevelNodes?.sortBy("order");
  }
}
