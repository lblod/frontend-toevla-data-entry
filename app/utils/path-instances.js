import { set } from '@ember/object';
import { get as emberGet } from '@ember/object';
import PointOfInterest from '../models/point-of-interest';
import Experience from '../models/experience';

export function butLast(path){
  const [, ...rest] = path.split(".").reverse();
  if( rest ) {
    return rest.reverse().join(".");
  } else {
    return null;
  }
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
async function ensureInstanceExists( start, key, kind, options ) {
  let object = await emberGet( start, key );
  if (!object && options.create) {
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

export async function getInstance(root, path, { create } = { create: true }){
  let rootKind;
  if( root instanceof PointOfInterest )
    rootKind = "pointOfInterest";
  else if( root instanceof Experience )
    rootKind = "experience";
  else
    throw `Cannot get instance for ${root}`;

  const objectPath = butLast(path);
  const pathArray = objectPath ? objectPath.split(".") : [];
  const returnedInstance = await ensureExistingInstances(root, rootKind, pathArray, { create });
  if( returnedInstance )
    return returnedInstance;
  else
    throw `Could not find or create instance on path ${path}.`;
}

export async function setInstanceValue(experience, path, value) {
  const instance = await getInstance(experience, path, { create: true });
  const prop = property(path);
  set(instance, prop, value);
}

export async function save(experience, path) {
  const instance = await getInstance(experience, path, { create: true });
  if (instance) {
    await instance.save();
  }
}


async function ensureExistingInstances(item, kind, path, options) {
  if (path.length === 0) {
    return item;
  } else if ( !item ) {
    // we didn't get a source (eg: when we couldn't create)
    return item;
  }
  else {
    if (kind === "experience") {
      return await ensureExistingExperienceInstances(item, path, options);
    }
    else if (kind === "pointOfInterest") {
      return await ensureExistingPointOfInterestInstances(item, path, options);
    }
    else if (kind === "parking") {
      return await ensureExistingParkingInstances(item, path, options);
    }
    else if (kind === "toilet" ) {
      return await ensureExistingToiletInstances(item, path, options);
    } else if (kind === "circulation" ) {
      return await ensureExistingCirculationInstances(item, path, options);
    }
    else {
      throw `Could not find [${path.join(",")}] for ${kind}`;
    }
  }
}

async function ensureExistingPointOfInterestInstances(poi, [first, ...rest], options) {
  if (first === "entrance") {
    const entrances = await emberGet(poi, "entrances");
    let entrance;
    if (entrances.length > 0) {
      entrance = entrances.firstObject;
    } else if( options.create ) {
      entrance =
        await poi
          .store
          .createRecord("entrance", {
            pointOfInterest: poi
          })
          .save();
    }
    return ensureExistingInstances(entrance, "entrance", rest, options);
  } else if (first === "parking") {
    const parkings = await emberGet(poi, "parkings");
    let parking;
    if (parkings.length > 0) {
      parking = parkings.firstObject;
    } else if( options.create ){
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
    return ensureExistingInstances(parking, "parking", rest, options);
  } else if (first === "toilet") {
    const toilets = await emberGet(poi, "toilets");
    let toilet;
    if (toilets.length > 0) {
      toilet = toilets.firstObject;
    } else if( options.create ) {
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
    return ensureExistingInstances(toilet, "toilet", rest, options);
  } else if (first === "trainStop") {
    const trainStops = await emberGet(poi, "trainStops");
    let trainStop;
    if (trainStops.length > 0) {
      trainStop = trainStops.firstObject;
    } else if( options.create ) {
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
    return ensureExistingInstances(trainStop, "trainStop", rest, options);
  } else if (first === "busStop") {
    const busStops = await emberGet(poi, "busStops");
    let busStop;
    if (busStops.length > 0) {
      busStop = busStops.firstObject;
    } else if( options.create ) {
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
    return ensureExistingInstances(busStop, "busStop", rest, options);
  } else if (first === "tramStop") {
    const tramStops = await emberGet(poi, "tramStops");
    let tramStop;
    if (tramStops.length > 0) {
      tramStop = tramStops.firstObject;
    } else if( options.create ) {
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
    return ensureExistingInstances(tramStop, "tramStop", rest, options);
  } else if (first === "publicTransportRouteDescription") {
    let routeDescription = await emberGet(poi, "publicTransportRouteDescription");
    if (!routeDescription && options.create) {
      routeDescription =
        await poi
          .store
          .createRecord("route-description")
          .save();
      poi.publicTransportRouteDescription = routeDescription;
      await poi.save();
    }
    return ensureExistingInstances(routeDescription, "routeDescription", rest, options);
  } else if (first === "restaurant") {
    const restaurant = await ensureInstanceExists( poi, "restaurant", "restaurant", options );
    return ensureExistingInstances(restaurant, "restaurant", rest);
  } else if (first === "shop") {
    const shop = await ensureInstanceExists( poi, "shop", "shop", options );
    return ensureExistingInstances( shop, "shop", rest, options );
  }
}

async function ensureExistingToiletInstances(toilet, [first, ...rest], options) {
  if (first === "sizeOfElevator") {
    let sizeOfElevator = await emberGet(toilet, "sizeOfElevator");
    if (!sizeOfElevator && options.create) {
      sizeOfElevator =
        await toilet
          .store
          .createRecord("area")
          .save();
      toilet.sizeOfElevator = sizeOfElevator;
      await toilet.save();
    }
    return ensureExistingInstances(sizeOfElevator, "sizeOfElevator", rest, options);
  }
  else if (first === "sizeOfPlateauElevator") {
    let sizeOfPlateauElevator = await emberGet(toilet, "sizeOfPlateauElevator");
    if (!sizeOfPlateauElevator && options.create) {
      sizeOfPlateauElevator =
        await toilet
          .store
          .createRecord("area")
          .save();
      toilet.sizeOfPlateauElevator = sizeOfPlateauElevator;
      await toilet.save();
    }
    return ensureExistingInstances(sizeOfPlateauElevator, "sizeOfPlateauElevator", rest, options);
  }
  else if (first === "sizeOfToiletRoom") {
    let sizeOfToiletRoom = await emberGet(toilet, "sizeOfToiletRoom");
    if (!sizeOfToiletRoom && options.create) {
      sizeOfToiletRoom =
        await toilet
          .store
          .createRecord("area")
          .save();
      toilet.sizeOfToiletRoom = sizeOfToiletRoom;
      await toilet.save();
    }
    return ensureExistingInstances(sizeOfToiletRoom, "sizeOfToiletRoom", rest, options);
  }
}

async function ensureExistingParkingInstances(parking, [first, ...rest], options) {
  if (first === "pathToEntrance") {
    let pathToEntrance = await emberGet(parking, "pathToEntrance");
    if (!pathToEntrance && options.create) {
      pathToEntrance =
        await parking
          .store
          .createRecord("path")
          .save();
      parking.pathToEntrance = pathToEntrance;
      await parking.save();
    }
    return ensureExistingInstances(pathToEntrance, "path", rest, options);
  }
}

async function ensureExistingExperienceInstances(experience, [first, ...rest], options) {
  if (first === "pointOfInterest") {
    return await ensureExistingInstances(await emberGet(experience, "pointOfInterest"), "pointOfInterest", rest, options);
  } else if( first === "circulation" ) {
    const circulation = await ensureInstanceExists( experience, "circulation", "route", options );
    return ensureExistingInstances(circulation, "circulation", rest, options);
  } else if( first === "tour" ) {
    const tour = await ensureInstanceExists( experience, "guidedTour", "guided-tour", options );
    return ensureExistingInstances(tour, "guidedTour", rest, options);
  } else if( first === "auditorium" ) {
    const auditorium = await ensureInstanceExists( experience, "auditorium", "auditorium", options );
    return ensureExistingInstances(auditorium, "auditorium", rest, options);
  } else {
    throw `Requested path ${first} of Experience, which is not supported`;
  }
}

async function ensureExistingCirculationInstances(circulation, [first, ...rest], options) {
  if (first === "sizeOfPlateauElevator") {
    const area = await ensureInstanceExists( circulation, first, "area", options );
    return ensureExistingInstances( area, "area", rest, options );
  } else if( first === "sizeOfElevator" ) {
    const area = await ensureInstanceExists( circulation, first, "area", options );
    return ensureExistingInstances( area, "area", rest, options );
  } else {
    throw `Requested path ${first} of Circulation, which is not supported`;
  }
}
