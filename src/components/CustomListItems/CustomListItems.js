import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";

const CustomListItems = ({
  listItems,
  setListItems,
  inputsDisabled = false,
}) => {
  const [currentListInput, setCurrentListInput] = useState("");
  const handleCurrentListItemChange = (evt) => {
    setCurrentListInput(evt.target.value);
  };

  const handleListItemSubmit = (evt) => {
    if (evt.key === "Enter" && currentListInput !== "") {
      setListItems([
        ...listItems,
        {
          value: currentListInput,
          checked: false,
        },
      ]);
      setCurrentListInput("");
    }
  };

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
      {listItems.map((item) => {
        return (
          <ListItem dense key={item.value}>
            <ListItemIcon>
              <Checkbox
                checked={item.checked}
                edge="start"
                tabIndex={-1}
                disableRipple
                onClick={() => handledCheckedItem(item)}
              />
            </ListItemIcon>
            <TextField
              value={item.value}
              fullWidth
              disabled={inputsDisabled}
              {...(!inputsDisabled && {
                InputProps: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => removeItemFromList(item)}
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
      })}
      {!inputsDisabled && (
        <ListItem>
          <ListItemIcon>
            <Add edge="start" />
          </ListItemIcon>
          <TextField
            placeholder="Add an item..."
            value={currentListInput}
            onChange={handleCurrentListItemChange}
            onKeyPress={handleListItemSubmit}
            fullWidth
          />
        </ListItem>
      )}
    </List>
  );
};

export default CustomListItems;
