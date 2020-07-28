const initialState = {
  activeLists: [
    {
      title: "List One",
      listItems: [
        { value: "Item 1", checked: false },
        { value: "Item 2", checked: false },
      ],
    },
    {
      title: "List Two",
      listItems: [
        { value: "Item 1", checked: false },
        { value: "Item 2", checked: false },
      ],
    },
    {
      title: "List Three",
      listItems: [
        { value: "Item 1", checked: false },
        { value: "Item 2", checked: false },
      ],
    },
    {
      title: "List Four",
      listItems: [
        { value: "Item 1", checked: false },
        { value: "Item 2", checked: false },
      ],
    },
    {
      title: "List Five",
      listItems: [
        { value: "Item 1", checked: false },
        { value: "Item 2", checked: false },
      ],
    },
  ],
  archivedLists: [],
};

export const lists = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_ACTIVE_LIST":
      return {
        ...state,
        activeLists: [...state.activeLists, action.newList],
      };
    case "UPDATE_LIST_ITEMS":
      return {
        ...state,
      };
    default:
      return state;
  }
};
