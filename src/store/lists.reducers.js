const initialState = {
  activeLists: [
    {
      id: "abc",
      title: "List One",
      listItems: [
        { value: "Item 1", checked: false },
        { value: "Item 2", checked: false },
      ],
    },
    {
      id: "def",
      title: "List Two",
      listItems: [
        { value: "Item 1", checked: false },
        { value: "Item 2", checked: false },
      ],
    },
    {
      id: "ghi",
      title: "List Three",
      listItems: [
        { value: "Item 1", checked: false },
        { value: "Item 2", checked: false },
      ],
    },
    {
      id: "jkl",
      title: "List Four",
      listItems: [
        { value: "Item 1", checked: false },
        { value: "Item 2", checked: false },
      ],
    },
    {
      id: "mno",
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
      const foundIndex = state.activeLists.findIndex(
        (item) => item.id === action.updated.id
      );

      console.log(action.updated);

      state.activeLists[foundIndex] = {
        ...action.updated,
      };

      return {
        ...state,
        activeLists: [...state.activeLists],
      };
    default:
      return state;
  }
};
