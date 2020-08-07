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
    case "UPDATE_LIST":
      return {
        ...state,
        activeLists: [...action.updatedList],
      };
    case "ARCHIVE_LIST":
      // This would be an easy solution to creating an archive like Google Keep has
      // const foundObject = state.activeLists.find(
      //   (item) => item.id === action.id
      // );

      return {
        ...state,
        activeLists: state.activeLists.filter((item) => item.id !== action.id),
        // archivedLists: [...state.archivedLists, { ...foundObject }],
      };
    default:
      return state;
  }
};
