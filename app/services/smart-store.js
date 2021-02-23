import { isEqual } from '@ember/utils';
import { inject as service } from '@ember/service';
import Service from '@ember/service';
import { tracked } from 'tracked-built-ins';

function sameArray( a,b ) {
  return a.length == b.length
    && a.every( (v,i) => v == b[i] );
}

class SaveInfo {
  // item to save
  instance = null;
  // information to transition on failed save
  routeInfos = tracked([]);
  // timestamp indicating last change
  @tracked lastRequest = null;
  // timestamp indicating creation
  @tracked firstRequest = null;

  // Creates a new SaveInfo item
  constructor(instance, routeInfo) {
    this.instance = instance;
    this.routeInfos.push(routeInfo);
    this.firstRequest = new Date();
    this.lastRequest = this.firstRequest;
  }

  // Updates an existing SaveInfo item
  update(routeInfo) {
    const routeInfoExists =
      this.routeInfos.find((a) =>
        a.name == routeInfo.name
        && sameArray(a.models, routeInfo.models));
    if (!routeInfoExists)
      this.routeInfos.push(routeInfo);
    this.lastRequest = new Date();
  }
}

export default class SmartStoreService extends Service {
  // all waiting outstanding changes
  // _waiting = tracked({}); // doesn't operate as we hoped
  @tracked _waiting = {};
  // all executing outstanding changes
  _executing = tracked(Set);
  // all failed changes
  _failed = tracked([]);

  // Router service is used to auto-generate the URL
  @service router;

  // a timeout to save each outstanding change
  timeouts = new WeakMap();

  /**
    * Yields an Array of all outstanding updates.  Handy for rendering an
    * update icon.
    */
  get outstandingUpdates() {
    return Object.keys(this._waiting)
      .map((key) => this._waiting[key])
      .sort((a, b) => a.lastRequest <= b.lastRequest);
  }

  /**
     * Yields a tracked Set of changes which are currently being executed.
     *
     * These are the requests currently being sent to the backend.
     */
  get executingUpdates() {
    return [...this._executing];
  }

  /**
     * Yields a tracked Array of updates which could not be executed.
     *
     * These are requests which have failed to execute.
     */
  get failedUpdates() {
    return this
      ._failed
      .slice()
      .sort((a, b) => a.lastRequest <= b.lastRequest);
  }

  /**
     * Persist an item, this is like calling .save on the item.
     */
  persist(item, options = {}) {
    // save new item directly
    if (item.isNew)
      item.save();
    else
      this._addOutstandingChange(item, options);
  }

  hasOutstandingUpdate(item) {
    return this._waiting[item.id];
  }

  // Adds an outstanding change to the backlog
  _addOutstandingChange(item, options) {
    let saveInfo;
    let routeInfo = options.routeInfo || this._currentRouteInfo;
    if (this.hasOutstandingUpdate(item)) {
      saveInfo = this._waiting[item.id];
      saveInfo.update(routeInfo);
      clearTimeout(this.timeouts.get(saveInfo));
    } else {
      saveInfo = new SaveInfo(item, routeInfo);
      this._waiting[item.id] = saveInfo;
      this._waiting = { ...this._waiting };
    }

    this.timeouts.set(
      saveInfo,
      setTimeout(
        () => this._executeItemSaveOnTimeout(saveInfo),
        5000));
  }

  async _executeItemSaveOnTimeout(saveInfo) {
    const item = saveInfo.instance;
    this._removeTimeout(saveInfo);
    this._moveToExecuting(saveInfo);
    try {
      await item.save();
    } catch (e) {
      this._moveToFailed(saveInfo);
    } finally {
      this._removeFromExecuting(saveInfo);
    }
  }

  _removeTimeout(saveInfo) {
    let tim = this.timeouts.get(saveInfo);
    if (tim)
      clearTimeout(tim);

    this.timeouts.delete(saveInfo);
  }

  _moveToExecuting(saveInfo) {
    const item = saveInfo.instance;
    console.log(this._waiting);
    delete this._waiting[item.id];
    this._waiting = { ...this._waiting };
    console.log(this._waiting);
    this._executing.add(saveInfo);
  }

  _removeFromExecuting(saveInfo) {
    this._executing.delete(saveInfo);
  }

  _moveToFailed(saveInfo) {
    this._executing.delete(saveInfo);
    this._failed.push(saveInfo);
  }

  get _currentRouteInfo() {
    const route = this.router.currentRoute;
    const routeProperties = function(route) {
      if (route === null) {
        return [];
      } else {
        const params =
          route
            .paramNames
            .map((name) => route.params[name]);
        return [...routeProperties(route.parent), ...params];
      }
    };

    return { name: route.name, models: routeProperties(route) };
  }
}
