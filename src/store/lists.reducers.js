const initialState = {
  activeLists: [],
};

export const lists = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_ACTIVE_LIST":
      return {
        ...state,
        activeLists: [...state.activeLists, action.newList],
      };
    default:
      return state;
  }
};
