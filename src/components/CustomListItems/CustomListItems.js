import React from "react";
import List from "@material-ui/core/List";

import ListItemInput from "../ListItemInput/ListItemInput";

const EmptyInput = React.forwardRef((props, ref) => {
  return <ListItemInput ref={ref} {...props} />;
});

const CustomListItems = ({
  listItems,
  setListItems,
  inputsDisabled = false,
}) => {
  const emptyRef = React.createRef();

  const handledCheckedItem = (value) => {
    const currentIndex = listItems.indexOf(value);
    const updatedList = [...listItems];
    updatedList[currentIndex] = {
      ...updatedList[currentIndex],
      checked: !value.checked,
    };
    updatedList.sort((a, b) => a.checked - b.checked);
    setListItems(updatedList);
  };

  const removeItemFromList = (item) => {
    setListItems(listItems.filter((a) => a !== item));
  };

  return (
    <List>
      {listItems.map((item) => {
        return (
          <ListItemInput
            key={item.id}
            checkbox
            existingItem={item}
            handledCheckedItem={handledCheckedItem}
            listItems={listItems}
            setListItems={setListItems}
            inputsDisabled={inputsDisabled}
            removeItemFromList={removeItemFromList}
            emptyRef={emptyRef}
          />
        );
      })}
      {!inputsDisabled && (
        <EmptyInput
          ref={emptyRef}
          listItems={listItems}
          setListItems={setListItems}
          newItem
        />
      )}
    </List>
  );
};

export default CustomListItems;
