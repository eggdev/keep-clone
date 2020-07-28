import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Add from "@material-ui/icons/Add";
import Checkbox from "@material-ui/core/Checkbox";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const ListItemInput = ({
  index,
  newItem = false,
  existingItem = {
    value: "",
    checked: false,
  },
  removeItemFromList = () => {},
  handledCheckedItem = () => {},
  listItems,
  setListItems,
  checkbox = false,
  inputsDisabled = false,
}) => {
  const [currentListInput, setCurrentListInput] = useState(existingItem);

  const editExistingListItem = (value) => {
    if (!newItem) {
      const newList = [...listItems];
      const listItemToUpdate = { ...newList[index] };
      listItemToUpdate.value = value;
      newList[index] = listItemToUpdate;
      setListItems([...newList]);
    }
  };

  const handleCurrentListItemChange = (evt) => {
    setCurrentListInput({ value: evt.target.value });
    if (!newItem) editExistingListItem(evt.target.value);
  };

  const handleBlur = () => handleListItemSubmit({ key: "Enter" });

  const handleListItemSubmit = (evt) => {
    console.log(evt);
    if (evt.key === "Enter" && currentListInput.value !== "") {
      if (newItem) {
        setListItems([
          ...listItems,
          {
            value: currentListInput.value,
            checked: false,
          },
        ]);
        setCurrentListInput({ value: "", checked: false });
      }
      if (document && document.activeElement) document.activeElement.blur();
    }
  };

  return (
    <ListItem>
      <ListItemIcon>
        {checkbox ? (
          <Checkbox
            checked={existingItem.checked}
            edge="start"
            tabIndex={-1}
            disableRipple
            size="small"
            onClick={() => handledCheckedItem(existingItem)}
          />
        ) : (
          <Add edge="start" />
        )}
      </ListItemIcon>
      <TextField
        placeholder="Add an item..."
        value={inputsDisabled ? existingItem.value : currentListInput.value}
        onChange={handleCurrentListItemChange}
        onBlur={handleBlur}
        onKeyPress={handleListItemSubmit}
        fullWidth
        data-testid="input"
        disabled={inputsDisabled}
        {...(!inputsDisabled &&
          !newItem && {
            InputProps: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    data-testid="remove-item"
                    onClick={() => removeItemFromList(existingItem)}
                    edge="end"
                  >
                    <Close />
                  </IconButton>
                </InputAdornment>
              ),
            },
          })}
      />
    </ListItem>
  );
};

export default ListItemInput;
