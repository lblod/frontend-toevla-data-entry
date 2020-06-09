// Types for compiled templates
declare module 'frontend-toevla-data-entry/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}

declare module 'ember-statecharts/utils/statechart' {
  export default interface Statechart {
    send(name: string, arg?: any ): any;
    currentState: { value: string }
  }
}
