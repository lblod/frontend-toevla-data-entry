import { set } from '@ember/object';
import { get as emberGet } from '@ember/object';

export function butLast(path){
  const [, ...rest] = path.split(".").reverse();
  return rest.reverse().join(".");
}

/**
 * Ensures an intermediate instance (not an array) exists.
 *
 * @param start [Object] Instance from which to start.
 * @param key [string] The key which should exist on the instance.
 * @param kind [string] The type of instance which should be created
 *   through ember-data.
 * @private
 */
async function ensureInstanceExists( start, key, kind ) {
  let object = await emberGet( start, key );
  if (!object) {
    object = await start.store.createRecord( kind ).save();
    set( start, key, object );
    await start.save();
  }
  return object;
}

export function property(path){
  const [name,] = path.split(".").reverse();
  return name;
}

export async function getInstance(experience, path){
  const objectPath = butLast(path);
  return await ensureExistingInstances(experience, "experience", objectPath.split("."));
}

export async function setInstanceValue(experience, path, value) {
  const instance = await getInstance(experience, path);
  const prop = property(path);
  set(instance, prop, value);
}

export async function save(experience, path) {
  const instance = await getInstance(experience, path);
  if (instance) {
    await instance.save();
  }
}


async function ensureExistingInstances(item, kind, path) {
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
    } else if (kind === "circulation" ) {
      return await ensureExistingCirculationInstances(item, path);
    }
    else {
      throw `Could not find [${path.join(",")}] for ${kind}`;
    }
  }
}

async function ensureExistingPointOfInterestInstances(poi, [first, ...rest]) {
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
  } else if (first === "trainStop") {
    const trainStops = await emberGet(poi, "trainStops");
    let trainStop;
    if (trainStops.length > 0) {
      trainStop = trainStops.firstObject;
    } else {
      trainStop =
        await poi
          .store
          .createRecord("train-stop", {
            pointOfInterest: poi
          })
          .save();
      poi.trainStops.pushObject(trainStop);
      poi.save();
    }
    return ensureExistingInstances(trainStop, "trainStop", rest);
  } else if (first === "busStop") {
    const busStops = await emberGet(poi, "busStops");
    let busStop;
    if (busStops.length > 0) {
      busStop = busStops.firstObject;
    } else {
      busStop =
        await poi
          .store
          .createRecord("bus-stop", {
            pointOfInterest: poi
          })
          .save();
      poi.busStops.pushObject(busStop);
      poi.save();
    }
    return ensureExistingInstances(busStop, "busStop", rest);
  } else if (first === "tramStop") {
    const tramStops = await emberGet(poi, "tramStops");
    let tramStop;
    if (tramStops.length > 0) {
      tramStop = tramStops.firstObject;
    } else {
      tramStop =
        await poi
          .store
          .createRecord("tram-stop", {
            pointOfInterest: poi
          })
          .save();
      poi.tramStops.pushObject(tramStop);
      poi.save();
    }
    return ensureExistingInstances(tramStop, "tramStop", rest);
  } else if (first === "publicTransportRouteDescription") {
    let routeDescription = await emberGet(poi, "publicTransportRouteDescription");
    if (!routeDescription) {
      routeDescription =
        await poi
          .store
          .createRecord("route-description")
          .save();
      poi.publicTransportRouteDescription = routeDescription;
      await poi.save();
    }
    return ensureExistingInstances(routeDescription, "routeDescription", rest);
  }
}

async function ensureExistingToiletInstances(toilet, [first, ...rest]) {
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

async function ensureExistingParkingInstances(parking, [first, ...rest]) {
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

async function ensureExistingExperienceInstances(experience, [first, ...rest]) {
  if (first === "pointOfInterest") {
    return await ensureExistingInstances(await emberGet(experience, "pointOfInterest"), "pointOfInterest", rest);
  } else if( first === "circulation" ) {
    const circulation = await ensureInstanceExists( experience, "circulation", "route" );
    return ensureExistingInstances(circulation, "circulation", rest);
  }
  else {
    throw `Requested path ${first} of Experience, which is not supported`;
  }
}

async function ensureExistingCirculationInstances(circulation, [first, ...rest]) {
  if (first === "sizeOfPlateauElevator") {
    const area = await ensureInstanceExists( circulation, first, "area" );
    return ensureExistingInstances( area, "area", rest );
  } else if( first === "sizeOfElevator" ) {
    const area = await ensureInstanceExists( circulation, first, "area" );
    return ensureExistingInstances( area, "area", rest );
  } else {
    throw `Requested path ${first} of Circulation, which is not supported`;
  }
}
