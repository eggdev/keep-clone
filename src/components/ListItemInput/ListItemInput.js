import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import Add from "@material-ui/icons/Add";
import Checkbox from "@material-ui/core/Checkbox";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { idGenerator } from "../../utils/helpers";

const useStyles = makeStyles((theme) => ({
  checkedInput: {
    textDecoration: "line-through",
  },
}));

const ListItemInput = ({
  newItem = false,
  existingItem = {
    id: "",
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
  const { checkedInput } = useStyles();
  const [currentListInput, setCurrentListInput] = useState(existingItem);
  const editExistingListItem = (value) => {
    if (!newItem) {
      const newList = [...listItems];
      const index = newList.findIndex((item) => item.id === existingItem.id);
      const listItemToUpdate = { ...newList[index] };
      listItemToUpdate.value = value;
      newList[index] = listItemToUpdate;
      newList.sort((a, b) => a.checked - b.checked);
      setListItems([...newList]);
    }
  };

  const handleCurrentListItemChange = (evt) => {
    setCurrentListInput({ value: evt.target.value });
    if (!newItem) editExistingListItem(evt.target.value);
  };

  const handleBlur = () => handleListItemSubmit({ key: "Enter" });

  const handleListItemSubmit = (evt) => {
    if (evt.key === "Enter" && currentListInput.value !== "") {
      if (newItem) {
        setListItems([
          ...listItems,
          {
            id: idGenerator(),
            value: currentListInput.value,
            checked: false,
          },
        ]);
        setCurrentListInput({ value: "", checked: false });
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
      <InputBase
        className={existingItem.checked ? checkedInput : ""}
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
          })}
      />
    </ListItem>
  );
};

export default ListItemInput;
