import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import fetch from 'fetch';

export default class PoiShowController extends Controller {
  @service smartStore;
  @service currentAccount;

  @action
  async storeChangedAtDate() {
    this.model.updatedAt = new Date();
    return await this.model.save();
  }
}
