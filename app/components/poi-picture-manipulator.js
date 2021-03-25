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
  persistImageOrder() {
    const images = [...this.images];
    for( let i = 0; i < images.length; i++ ) {
      images[i].order = i;
      this.smartStore.persist( images[i] );
    }
  }

  @action
  updateImage(image, property, event) {
    event.preventDefault();
    image.set(property, event.target.value);
    this.smartStore.persist( image );
  }

  @action
  removeImage(image, event) {
    event.preventDefault();
    image.destroyRecord();
  }

  @action
  imageUp(image, event) {
    event.preventDefault();
    const currentIndex = this.images.indexOf( image );
    swapIndex( this.images, currentIndex, currentIndex - 1);
    this.persistImageOrder();
  }

  @action
  imageDown(image, event) {
    event.preventDefault();
    const currentIndex = this.images.indexOf( image );
    swapIndex( this.images, currentIndex, currentIndex + 1);
    this.persistImageOrder();
  }

  @action
  async uploadedFile(file) {
    file.pointOfInterest = this.args.poi;
    file.order = this.images.length;
    this.args.poi.images.addObject( file );
    this.smartStore.persist(this.args.poi);
    this.persistImageOrder();
  }
}

/**
 * Swaps the order of two items in an array.  Safe: if the items can't
 * be swapped, no operation will be executed.
 */
function swapIndex( array, idxA, idxB ) {
  const validRequest =
        idxA >= 0
        && idxB >= 0
        && idxA < array.length
        && idxB < array.length;

  if( validRequest ) {
    const itemA = array[idxA];
    array[idxA] = array[idxB];
    array[idxB] = itemA;
  }
}
