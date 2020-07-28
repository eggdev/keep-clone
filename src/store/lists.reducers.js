import { idGenerator } from "../utils/helpers.js";
const initialState = {
  activeLists: [],
  archivedLists: [],
};

export const lists = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_ACTIVE_LIST":
      return {
        ...state,
        activeLists: [
          ...state.activeLists,
          { ...action.newList, id: idGenerator() },
        ],
      };
    case "UPDATE_LIST_ITEMS":
      const updateIndex = state.activeLists.findIndex(
        (item) => item.id === action.updated.id
      );

      return {
        ...state,
        activeLists: [
          ...state.activeLists.slice(0, updateIndex),
          { ...action.updated },
          ...state.activeLists.slice(updateIndex + 1),
        ],
      };
    case "ARCHIVE_LIST":
      const foundObject = state.activeLists.find(
        (item) => item.id === action.id
      );

      // This would be an easy solution to creating an archive like Google Keep has
      return {
        ...state,
        activeLists: state.activeLists.filter((item) => item.id !== action.id),
        // archivedLists: [...state.archivedLists, { ...foundObject }],
      };
    default:
      return state;
  }
};
