import { get, computed } from '@ember/object';
import Statechart from 'ember-statecharts/utils/statechart';


// copied and adapted
function decorateStopInterpreterOnDestroy(destroyFn, service) {
  return function () {
    service.stop();

    destroyFn.apply(this, ...arguments);
  };
}

function statechart(config, options = {} ) {
  return computed(function () {
    const initialContext = this;

    options.actions = { ...(options.actions || {}), ...(this.statechartActions || {}) }
    options.guards = { ...(options.guards || {}), ...(this.statechartGuards || {}) }

    const statechart = new Statechart(config, options, initialContext);

    this.willDestroy = decorateStopInterpreterOnDestroy(this.willDestroy, statechart.service);

    return statechart;
  });
}


// our stuff
function handler( name?: string | undefined ) {
  return function( target: any, key: string, descriptor: PropertyDescriptor ){
    target.statechartActions = target.statechartActions || {};
    target.statechartActions[ name || key ] = function( context: any, ...args: any[] ) {
      return context[key].bind(context)(...args);
    }
    return descriptor;
  }
}

function guard( name?: string | undefined ) {
  return function( target: any, key: string, descriptor: PropertyDescriptor ){
    target.statechartGuards = target.statechartGuards || {};
    target.statechartGuards[ name || key ] = function( context: any ) {
      const response = get( context, key );
      return response;
    }

    return descriptor;
  }
}

export { handler, guard, statechart };
