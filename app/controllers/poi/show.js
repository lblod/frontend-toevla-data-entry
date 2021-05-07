import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import fetch from 'fetch';

export default class PoiShowController extends Controller {
  @service smartStore;
  @service currentAccount;
  @tracked publishModal;
  @tracked sendModal;

  @action
  async publish() {
    const id = this.model.id;
    const resp = await fetch(`/transfer/museum/${id}/send-to-public`, { method: 'POST' });
    const body = await resp.json();
    this.publishModal = false;
  }

  @action
  async sendToMuseum() {
    const id = this.model.id;
    const resp = await fetch(`/transfer/museum/${id}/send-to-museum`, { method: 'POST' });
    const body = await resp.json();
    this.sendModal = false;
  }

  @action
  async sendToValidator() {
    const id = this.model.id;
    const resp = await fetch(`/transfer/museum/${id}/send-to-validator`, { method: 'POST' });
    const body = await resp.json();
    this.sendModal = false;
  }
}
