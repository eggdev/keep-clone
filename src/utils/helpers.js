// ID Generator https://gist.github.com/gordonbrander/2230317
export function idGenerator() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

export function sortByChecked(arr) {
  return arr.sort((a, b) => a.checked - b.checked);
}
