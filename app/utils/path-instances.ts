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
  return await emberGet(experience, objectPath);
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
