const stateName = "todo-state";
export function loadState() {
  const serializedState = localStorage.getItem(stateName);
  if (serializedState) return JSON.parse(serializedState);
  return {};
}

export function saveState(state) {
  const stringifiedState = JSON.stringify(state);
  localStorage.setItem(stateName, stringifiedState);
}
