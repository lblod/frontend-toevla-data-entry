import { action } from '@ember/object';
import Component from '@glimmer/component';
import TreeNode from 'frontend-toevla-data-entry/models/tree-node';
import Experience from 'frontend-toevla-data-entry/models/tree-node';
import { localCopy } from 'tracked-toolbox';

interface EditComponentsElectronicPaymentSystemMovableArgs {
  treeNode: TreeNode;
  experience: Experience;
}

export default class EditComponentsElectronicPaymentSystemMovable extends Component<EditComponentsElectronicPaymentSystemMovableArgs> {
  @localCopy( 'args.experience.pointOfInterest.hasMovableElectronicPaymentSystem' )
  movablePaymentSystem;

  @action
  async save( event: Event ) {
    event.preventDefault();
    const poi = await this.args.experience.pointOfInterest;
    poi.hasMovableElectronicPaymentSystem = this.movablePaymentSystem;
    poi.save();
  }
}
