import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class TreeComponentsExperience extends Component {
  @action
  sidebarFocus(){
    document.querySelector('.au-c-action-sidebar').focus();
  }
}
