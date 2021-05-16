import { inject as service } from '@ember/service';
import Base from 'ember-simple-auth/authenticators/base';
import { get } from '@ember/object';
import fetch from 'fetch';
import { Headers } from 'fetch';
import Poi from 'frontend-toevla-data-entry/models/point-of-interest';

const BASE_PATH = '/email-login';
const CONTENT_TYPE = 'application/vnd.api+json';
const SUPPORTED_CREDENTIALS = 'same-origin';

export default class EmailLoginAuthenticator extends Base {
  @service store;

  // Restores the current session
  async restore() {
    const url = `${BASE_PATH}/sessions/current`;
    const result = await fetch(url, {
      type: 'GET',
      credentials: SUPPORTED_CREDENTIALS,
      headers: new Headers({
        'Content-Type': CONTENT_TYPE
      })
    });
    if (result.ok)
      return await result.json();
    else
      throw result;
  }

  async authenticate(email,key) {
    const result = await fetch(`${BASE_PATH}/login`, {
      method: 'POST',
      body: JSON.stringify({
        data: {
          attributes: {
            email, key
          },
          type: "authentications"
        }
      }),
      credentials: SUPPORTED_CREDENTIALS,
      headers: new Headers({
        'Content-Type': CONTENT_TYPE
      })
    });
    if (result.ok) {
      this.store.unloadAll();
      const resp = await result.json();
      return resp;
    }
    else
      throw result;
  }

  async invalidate() {
    const url = `${BASE_PATH}/sessions/current`;
    const result = await fetch(url, {
      method: 'DELETE',
      credentials: SUPPORTED_CREDENTIALS,
      headers: new Headers({
        'Content-Type': CONTENT_TYPE
      })
    });
    if (result.ok)
      return result;
    else
      throw result;
  }
}
