import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('poi', function() {
    this.route('show', { path: "/:id" }, function() {
      this.route('experiences', function() {
        this.route('new');
      });
    });
    this.route('new');
    this.route('edit', { path: "/:id/edit" });
  });

  this.route('experience', function() {
    this.route('show', { path: "/:id/" }, function() {
      this.route('tree');
    });
    this.route('edit', { path: "/:id/edit" });
  });
});
