import Store from '@ember-data/store';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PoiShow extends Route {
  @service store!: Store;

  async model({ id }: { id: string }) {
    return (await this.store.query("point-of-interest", { "filter[:id:]": id })).firstObject;
  }
}
