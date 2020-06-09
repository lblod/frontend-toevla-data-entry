import { helper } from '@ember/component/helper';

export function eq([one, two]: [any, any]): boolean {
  return one == two;
}

export default helper(eq);
