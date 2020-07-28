import React from "react";
import List from "@material-ui/core/List";

import ListItemInput from "../ListItemInput/ListItemInput";

const CustomListItems = ({
  listItems,
  setListItems,
  inputsDisabled = false,
}) => {
  const handledCheckedItem = (value) => {
    const currentIndex = listItems.indexOf(value);
    const updatedList = [...listItems];
    updatedList[currentIndex] = {
      ...updatedList[currentIndex],
      checked: !value.checked,
    };

    setListItems(updatedList);
  };

  const removeItemFromList = (item) => {
    setListItems(listItems.filter((a) => a !== item));
  };

  return (
    <List>
      {listItems.map((item, index) => {
        return (
          <ListItemInput
            key={`${index}_item`}
            checkbox
            index={index}
            existingItem={item}
            handledCheckedItem={handledCheckedItem}
            listItems={listItems}
            setListItems={setListItems}
            inputsDisabled={inputsDisabled}
            removeItemFromList={removeItemFromList}
          />
        );
      })}
      {!inputsDisabled && (
        <ListItemInput
          listItems={listItems}
          setListItems={setListItems}
          newItem
        />
      )}
    </List>
  );
};

export default CustomListItems;
