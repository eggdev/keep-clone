export function createActiveList(newList) {
  return {
    type: "CREATE_ACTIVE_LIST",
    newList,
  };
}

export function updateListItems(id, items) {
  return {
    type: "UPDATE_LIST_ITEMS",
    id,
    items,
  };
}
