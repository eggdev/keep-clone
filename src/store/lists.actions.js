export function createActiveList(newList) {
  return {
    type: "CREATE_ACTIVE_LIST",
    newList,
  };
}

export function updateActiveList({ id, title, listItems }) {
  return {
    type: "UPDATE_LIST_ITEMS",
    updated: { id, title, listItems },
  };
}

export function deleteList(id) {
  return {
    type: "ARCHIVE_LIST",
    id,
  };
}
