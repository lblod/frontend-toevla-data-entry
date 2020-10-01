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
      this.route('tree', function() {
        this.route('edit', { path: "/tree-node/edit/:tree_node_id" });
      });

      this.route('files', function() {
        this.route('edit', { path: "/:file_id/edit" });
      });
    });
    this.route('edit', { path: "/:id/edit" }, function() {
      this.route('tree-node', { path: "/tree-node/:tree_node_id" });
    });
  });

  this.route('tree-node', function() {});
  this.route('json-model-tester');
  this.route('login');
  this.route('legal', function() {
    this.route('cookiestatement');
    this.route('disclaimer');
    this.route('toegankelijkheidsverklaring');
  });
  this.route('contact');
  this.route('buildings', { path: "/gebouwen" });
  this.route('developers', { path: "/ontwikkelaars" }, function() {
    this.route('styling');
    this.route('plaatsing');
    this.route('intro');
  });
});
