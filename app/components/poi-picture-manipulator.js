import { inject as service } from '@ember/service';
import { tracked } from 'tracked-built-ins';
import { A } from '@ember/array';
import { computed } from '@ember/object';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { Resource, use } from 'ember-could-get-used-to-this';

class PictureListResource extends Resource {
  arr = tracked([]);

  get value() {
    return this.arr;
  }

  setup() {
    const poi = this.args.positional[0];
    this.arr = tracked(
      poi
        .images
        .toArray()
        .sortBy( "order" ));
  }
}

export default class PoiPictureManipulatorComponent extends Component {
  @use images = new PictureListResource( () => [this.args.poi]);

  @service smartStore

  @action
  onSort(stuff) {
    const images = [...this.images];
    for( let i = 0; i < images.length; i++ ) {
      images[i].order = i;
      this.smartStore.persist( images[i] );
    }
  }

  @action
  updateImage(image, property, event) {
    image.set(property, event.target.value);
    this.smartStore.persist( image );
  }

  @action
  removeImage(image, /* event */) {
    image.destroyRecord();
  }
}
