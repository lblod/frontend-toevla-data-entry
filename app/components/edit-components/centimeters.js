import { action } from '@ember/object';
import EditComponentsBooleanComponent from './boolean';

export default class EditComponentsCentimetersComponent extends EditComponentsBooleanComponent {
  @action
  resetMe(){
    console.log("Reset me");
  }
}
