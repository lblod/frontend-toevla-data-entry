import Component from '@glimmer/component';
import { action } from '@ember/object';
import TreeNode from 'frontend-toevla-data-entry/models/tree-node';
import Experience from 'frontend-toevla-data-entry/models/tree-node';
import { localCopy } from 'tracked-toolbox';

interface EditComponentsWifiAvailabilityArgs {
  treeNode: TreeNode;
  experience: Experience;
}

export default class EditComponentsWifiAvailability extends Component<EditComponentsWifiAvailabilityArgs> {
  @localCopy('args.experience.pointOfInterest.wifiAlwaysAvailable')
  wifiAlwaysAvailable: any;

  @action
  async save(event: Event) {
    event.preventDefault();
    const poi = await this.args.experience.pointOfInterest;
    poi.wifiAlwaysAvailable = this.wifiAlwaysAvailable;
    poi.save();
  }
}
