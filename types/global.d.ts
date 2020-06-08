// Types for compiled templates
declare module 'frontend-toevla-data-entry/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
