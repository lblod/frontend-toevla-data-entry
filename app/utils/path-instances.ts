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
  return await ensureExistingInstances(experience, "experience", objectPath.split("."));
}

export async function setInstanceValue(experience: Experience, path: string, value: any): Promise<Object> {
  const instance = await getInstance(experience, path);
  const prop = property(path);
  set(instance, prop, value);
}

export async function save(experience: Experience, path: string): Promise<Object> {
  const instance = await getInstance(experience, path);
  if (instance) {
    await instance.save();
  }
}


async function ensureExistingInstances(item: Object, kind: string, path: string[]): Promise<Object> {
  if (path.length === 0) {
    return item;
  }
  else {
    if (kind === "experience") {
      return await ensureExistingExperienceInstances(item, path);
    }
    else if (kind === "pointOfInterest") {
      return await ensureExistingPointOfInterestInstances(item, path);
    }
    else if (kind === "parking") {
      return await ensureExistingParkingInstances(item, path);
    }
    else if (kind === "toilet" ) {
      return await ensureExistingToiletInstances(item, path);
    }
    else {
      throw `Could not find [${path.join(",")}] for ${kind}`;
    }
  }
}

async function ensureExistingPointOfInterestInstances(poi: PointOfInterest, [first, ...rest]: string[]): Promise<Object> {
  if (first === "entrance") {
    const entrances = await emberGet(poi, "entrances");
    let entrance;
    if (entrances.length > 0) {
      entrance = entrances.firstObject;
    } else {
      entrance =
        await poi
          .store
          .createRecord("entrance", {
            pointOfInterest: poi
          })
          .save();
    }
    return ensureExistingInstances(entrance, "entrance", rest);
  } else if (first === "parking") {
    const parkings = await emberGet(poi, "parkings");
    let parking;
    if (parkings.length > 0) {
      parking = parkings.firstObject;
    } else {
      parking =
        await poi
          .store
          .createRecord("parking", {
            pointOfInterest: poi
          })
          .save();
      poi.parkings.pushObject(parking);
      poi.save();
    }
    return ensureExistingInstances(parking, "parking", rest);
  } else if (first === "toilet") {
    const toilets = await emberGet(poi, "toilets");
    let toilet;
    if (toilets.length > 0) {
      toilet = toilets.firstObject;
    } else {
      toilet =
        await poi
          .store
          .createRecord("toilet", {
            pointOfInterest: poi
          })
          .save();
      poi.toilets.pushObject(toilet);
      poi.save();
    }
    return ensureExistingInstances(toilet, "toilet", rest);
  }
}

async function ensureExistingToiletInstances(toilet: Ojbect, [first, ...rest]: string[]): Promise<Object> {
  if (first === "sizeOfElevator") {
    let sizeOfElevator = await emberGet(toilet, "sizeOfElevator");
    if (!sizeOfElevator) {
      sizeOfElevator =
        await toilet
          .store
          .createRecord("area")
          .save();
      toilet.sizeOfElevator = sizeOfElevator;
      await toilet.save();
    }
    return ensureExistingInstances(sizeOfElevator, "sizeOfElevator", rest);
  }
  else if (first === "sizeOfPlateauElevator") {
    let sizeOfPlateauElevator = await emberGet(toilet, "sizeOfPlateauElevator");
    if (!sizeOfPlateauElevator) {
      sizeOfPlateauElevator =
        await toilet
          .store
          .createRecord("area")
          .save();
      toilet.sizeOfPlateauElevator = sizeOfPlateauElevator;
      await toilet.save();
    }
    return ensureExistingInstances(sizeOfPlateauElevator, "sizeOfPlateauElevator", rest);
  }
  else if (first === "sizeOfToiletRoom") {
    let sizeOfToiletRoom = await emberGet(toilet, "sizeOfToiletRoom");
    if (!sizeOfToiletRoom) {
      sizeOfToiletRoom =
        await toilet
          .store
          .createRecord("area")
          .save();
      toilet.sizeOfToiletRoom = sizeOfToiletRoom;
      await toilet.save();
    }
    return ensureExistingInstances(sizeOfToiletRoom, "sizeOfToiletRoom", rest);
  }
}

async function ensureExistingParkingInstances(parking: Object, [first, ...rest]: string[]): Promise<Object> {
  if (first === "pathToEntrance") {
    let pathToEntrance = await emberGet(parking, "pathToEntrance");
    if (!pathToEntrance) {
      pathToEntrance =
        await parking
          .store
          .createRecord("path")
          .save();
      parking.pathToEntrance = pathToEntrance;
      await parking.save();
    }
    return ensureExistingInstances(pathToEntrance, "path", rest);
  }
}

async function ensureExistingExperienceInstances(experience: Object, [first, ...rest]: string[]): Promise<Object> {
  if (first === "pointOfInterest") {
    return await ensureExistingInstances(await emberGet(experience, "pointOfInterest"), "pointOfInterest", rest);
  }
  else {
    throw `Requested path ${first} of Experience, which is not supported`;
  }
}
