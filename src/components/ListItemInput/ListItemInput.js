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

  const handleCurrentListItemChange = (evt) => {
    setCurrentListInput({ value: evt.target.value });
  };

  const handleBlur = () => handleListItemSubmit({ key: "Enter" });

  const handleListItemSubmit = (evt) => {
    if (evt.key === "Enter" && currentListInput.value !== "") {
      if (newItem) {
        setListItems([
          ...listItems,
          {
            value: currentListInput.value,
            checked: false,
          },
        ]);
      }
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
        value={currentListInput.value}
        onChange={handleCurrentListItemChange}
        onBlur={handleBlur}
        onKeyPress={handleListItemSubmit}
        fullWidth
        {...(!inputsDisabled &&
          !newItem && {
            InputProps: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
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
