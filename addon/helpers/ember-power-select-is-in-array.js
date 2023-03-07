import {helper} from '@ember/component/helper';

export function isInArray([i, arr]) {
  if (arr === null || arr === undefined) {
    return false;
  }
  return arr.some(arrVal => i === arrVal);
}


export default helper(isInArray);
