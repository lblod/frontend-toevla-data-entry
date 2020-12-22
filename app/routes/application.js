import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import ENV from 'frontend-toevla-data-entry/config/environment';

export default class ApplicationRoute extends Route.extend(ApplicationRouteMixin) {
  sessionInvalidated() {
    const logoutUrl = ENV['torii']['providers']['acmidm-oauth2']['logoutUrl'];
    window.location.replace(logoutUrl);
  }
}
