import { action } from '@ember/object';
import Component from '@glimmer/component';
import TreeNode from 'frontend-toevla-data-entry/models/tree-node';
import Scorable from 'frontend-toevla-data-entry/models/scorable';
import { localCopy } from 'tracked-toolbox';

interface EditComponentsElectronicPaymentSystemMovableArgs {
  treeNode: TreeNode;
  subject: Scorable;
}

export default class EditComponentsElectronicPaymentSystemMovable extends Component<EditComponentsElectronicPaymentSystemMovableArgs> {
  @localCopy( 'args.subject.pointOfInterest.hasMovableElectronicPaymentSystem' )
  movablePaymentSystem;

  @action
  async save( event: Event ) {
    event.preventDefault();
    const poi = await this.args.subject.pointOfInterest;
    poi.hasMovableElectronicPaymentSystem = this.movablePaymentSystem;
    poi.save();
  }
}
