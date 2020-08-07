// ID Generator https://gist.github.com/gordonbrander/2230317
export function idGenerator() {
  return Math.random().toString(36).substr(2, 9);
}

export function sortByChecked(arr) {
  return arr.sort((a, b) => a.checked - b.checked);
}

/**
 *
 * @param {Array} arr | Array you want to find an object from
 * @param {String} param | The param to use for searching the array, eg. ID
 * @param {Any} paramValue | The value used to find the return object
 */
export function findOneInArray(arr, param, paramValue) {
  return arr.find((a) => a[param] === paramValue);
}

export function findOneAndUpdate(arr, searchParam, searchValue, updatedObject) {
  return arr.map((el) =>
    el[searchParam] === searchValue ? { ...updatedObject } : el
  );
}
