import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ENV from 'frontend-toevla-data-entry/config/environment';

const BaseClass = ENV.authorizationKind === "none"
  ? Route
      : Route.extend(AuthenticatedRouteMixin);

console.log(`Authorization kind is ${ENV.authorizationKind}`);

export default class Poi extends BaseClass {
}
