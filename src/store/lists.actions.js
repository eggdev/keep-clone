export function createActiveList(newList) {
  return {
    type: "CREATE_ACTIVE_LIST",
    newList,
  };
}

export function updateActiveList() {
  return {};
}

export function updateListArray(updatedList) {
  return {
    type: "UPDATE_LIST",
    updatedList,
  };
}

export function deleteList(id) {
  return {
    type: "ARCHIVE_LIST",
    id,
  };
}
