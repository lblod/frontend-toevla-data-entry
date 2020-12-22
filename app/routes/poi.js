import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ENV from 'frontend-toevla-data-entry/config/environment';

const BaseClass = ENV.environment === "development"
  ? Route
  : Route.extend( AuthenticatedRouteMixin );

export default class Poi extends BaseClass {
}
