import Service from '@ember/service';

export default class BaseUriService extends Service {
  get base() {
    return new URL( document.baseURI );
  }

  get origin() {
    return this.base.origin;
  }

  get host() {
    return this.base.host;
  }
}
