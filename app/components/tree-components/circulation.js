import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class TreeComponentsCirculation extends Component {
  @action
  sidebarFocus(){
    var sidebarFocusTarget = document.querySelector('.au-c-action-sidebar');

    if (sidebarFocusTarget) {
      sidebarFocusTarget.focus();
    }
  }
}
