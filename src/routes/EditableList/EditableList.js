import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import CustomListItems from "../../components/CustomListItems/CustomListItems";

import { createActiveList, updateActiveList } from "../../store/lists.actions";

const useStyles = makeStyles(() => ({
  dialogContainer: {
    width: "100%",
  },
}));

const EditableList = ({ showDialog, setShowDialog, newList = false }) => {
  const { lists } = useSelector((state) => state);
  const routeMatch = useRouteMatch("/list/:id");

  const { dialogContainer } = useStyles();
  const dispatch = useDispatch();

  const findEditingList = (param) => {
    const listId = routeMatch && routeMatch.isExact && routeMatch.params.id;
    const list = lists.activeLists.find((x) => x.id === listId);
    return list[param];
  };

  const [title, setTitle] = useState(newList ? "" : findEditingList("title"));
  const [listItems, setListItems] = useState(
    newList ? [] : findEditingList("listItems")
  );

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  };

  const handleClearList = () => {
    setListItems([]);
    setTitle("");
  };

  const handleCreateList = () => {
    if (title !== "" || listItems.length > 0) {
      dispatch(
        createActiveList({
          title,
          listItems,
        })
      );
      setShowDialog(false);
    }
  };

  const handleEditList = () => {
    const listId = routeMatch && routeMatch.isExact && routeMatch.params.id;
    if (title !== "" && listItems.length > 0) {
      dispatch(
        updateActiveList({
          id: listId,
          title,
          listItems,
        })
      );
    }
  };

  const onClose = () => {
    if (newList) handleCreateList();
    else handleEditList();
    setShowDialog(false);
  };

  return (
    <Dialog
      open={showDialog}
      onClose={onClose}
      maxWidth="sm"
      PaperProps={{
        className: dialogContainer,
      }}
    >
      <DialogTitle>
        <TextField
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          fullWidth
        />
      </DialogTitle>
      <DialogContent>
        <CustomListItems listItems={listItems} setListItems={setListItems} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClearList}>Clear</Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditableList;
