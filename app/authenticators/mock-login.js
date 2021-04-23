import { inject as service } from '@ember/service';
import Base from 'ember-simple-auth/authenticators/base';
import { get } from '@ember/object';
import fetch from 'fetch';
import { Headers } from 'fetch';
import Poi from 'frontend-toevla-data-entry/models/point-of-interest';

const BASE_PATH = '/mocklogin/sessions';
const CONTENT_TYPE = 'application/vnd.api+json';
const SUPPORTED_CREDENTIALS = 'same-origin';

export default class MockLoginAuthenticator extends Base {
  @service store;

  // Restores the current session
  async restore() {
    const url = `${BASE_PATH}/current`;
    const result = await fetch(url, {
      type: 'GET',
      credentials: SUPPORTED_CREDENTIALS,
      headers: new Headers({
        'Content-Type': CONTENT_TYPE
      })
    });
    if (result.ok)
      return result.json();
    else
      throw result;
  }

  async authenticate(poi) {
    console.assert( poi instanceof Poi || poi.type === "points-of-interest" );

    const result = await fetch(BASE_PATH, {
      method: 'POST',
      body: JSON.stringify({
        data: {
          relationships: {
            "point-of-interest": {
              data: {
                id: get( poi, 'id'),
                type: "points-of-interest"
              }
            }
          },
          type: "sessions"
        }
      }),
      credentials: SUPPORTED_CREDENTIALS,
      headers: new Headers({
        'Content-Type': CONTENT_TYPE
      })
    });
    if (result.ok) {
      this.store.unloadAll();
      return result.json();
    }
    else
      throw result;
  }

  async invalidate() {
    const url = `${BASE_PATH}/current`;
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
