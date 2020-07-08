import { set } from '@ember/object';
import { get as emberGet } from '@ember/object';
import Experience from 'frontend-toevla-data-entry/models/experience';

export function butLast(path: string): string {
  const [, ...rest] = path.split(".").reverse();
  return rest.reverse().join(".");
}

export function property(path: string): string {
  const [name,] = path.split(".").reverse();
  return name;
}

export async function getInstance(experience: Experience, path: string): Promise<Object> {
  const objectPath = butLast(path);
  return await ensureExistingInstances( experience, "experience", objectPath.split(".") );
}

export async function setInstanceValue(experience: Experience, path: string, value: any): Promise<Object> {
  const instance = await getInstance(experience, path);
  const prop = property( path );
  set( instance, prop, value );
}

export async function save(experience: Experience, path: string): Promise<Object> {
  const instance = await getInstance(experience, path);
  if (instance) {
    await instance.save();
  }
}


async function ensureExistingInstances( item: Object, kind: string, path: string[] ): Promise<Object> {
  if( path.length === 0 ) {
    return item;
  }
  else {
    if( kind === "experience" ) {
      return await ensureExistingExperienceInstances(item, path);
    }
    else if ( kind === "pointOfInterest" ) {
      return await ensureExistingPointOfInterestInstances(item, path);
    }
    else {
      throw `Could not find [${path.join(",")}] for ${kind}`;
    }
  }
}

async function ensureExistingPointOfInterestInstances( poi: PointOfInterest, [first, ...rest]: string[] ): Promise<Object> {
  if( first === "entrance" ) {
    const entrances = await emberGet( poi, "entrances" );
    let entrance;
    if( entrances.length > 0 ){
      entrance = entrances.firstObject;
    } else {
      entrance =
        await poi
          .store
          .createRecord( "entrance", {
            pointOfInterest: poi
          })
          .save();
    }
    return ensureExistingInstances( entrance, "entrance", rest );
  }
}

async function ensureExistingExperienceInstances(experience: Object, [first, ...rest]: string[]): Promise<Object> {
  if( first === "pointOfInterest" ) {
    return  await ensureExistingInstances( await emberGet( experience, "pointOfInterest" ), "pointOfInterest", rest );
  }
  else {
    throw `Requested path ${first} of Experience, which is not supported`;
  }
}
