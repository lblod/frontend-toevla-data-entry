import { get } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import Service from '@ember/service';

function pre(functor, reason) {
  return function(target, name, descriptor) {
    const original = descriptor.value;

    descriptor.value = function(...args) {
      let realFunctor =
        typeof functor === "string"
          ? this[functor]
          : functor;

      if (typeof realFunctor !== "function") {
        throw `Incorrectly applied @pre, precondition function could not be found (${functor})`;
      }

      if (!realFunctor.apply(this, [])) {
        throw reason;
      }
      else {
        return original.apply(this, args);
      }
    };

    return descriptor;
  };
}

function isAuthenticated() {
  return this.sessionService.isAuthenticated;
}

/**
 * Thightly coupled to the Session service, but that doesn't allow for
 * extensions we desired.
 */
export default class CurrentAccountService extends Service {
  @service('session') sessionService;
  @service store;

  /**
     * Contains the session as a readable model.  If this exisists it is
     * also going to contain the roles.
     */
  @tracked session = null;

  constructor() {
    super(...arguments);
    this.restoreSession();
  }

  async restoreSession() {
    await this.sessionService.store.restore();
    if (this.sessionService.isAuthenticated) {
      this.fetch();
    }
  }

  get account() {
    return this.session?.account;
  }

  get availableRoles() {
    return this.account?.roles;
  }

  get selectedRole() {
    return this.session?.role;
  }

  get roleIsValidator() {
    return get(this, "selectedRole.isValidator");
  }

  get roleIsDataEntry() {
    return get(this, "selectedRole.isDataEntry");
  }

  isAuthenticated() {
    return this.sessionService.isAuthenticated;
  }

  @pre("isAuthenticated", "Can't fetch account if not authenticated (local function on this object)")
  // @pre( isAuthenticated, "Can't fetch account if not authenticated (global function from import)" )
  // @pre( function() { return this.sessionService.isAuthenticated; }, "Can't fetch account if not authenticated (ad-hoc definition)" )
  // @pre( () => this.sessionService.isAuthenticated, "Can't work due to JS semantics, I think" )
  async fetch() {
    console.log("Fetching session");

    // first set up the session and roles
    try {
      const queryResults = await this.store.query("session", {
        "filter[:id:]": this.sessionService.data.authenticated.data.id,
        include: "account.roles,role"
      });
      this.session = queryResults.firstObject;
    } catch (e) {
      console.error(e);
    }
  }

  async clear() {
    this.session = null;
  }
}
