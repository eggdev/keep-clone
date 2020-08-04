import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import TaskList from "../../components/TaskList/TaskList";

import { findOneInArray } from "../../utils/helpers";

const useStyles = makeStyles(() => ({
  dialogContainer: {
    width: "100%",
  },
}));

const ListPage = ({
  showDialog = false,
  setShowDialog = () => {},
  newList = false,
  listDetails = { title: "", listItems: [] },
  updateListItem = () => {},
}) => {
  const { id } = useParams();
  const { activeLists } = useSelector((state) => state.lists);
  const { dialogContainer } = useStyles();
  const foundElement = findOneInArray(activeLists, "id", id);
  const [listObject, setListObject] = useState(
    newList ? listDetails : foundElement
  );

  const handleTitleChange = (evt) => {
    setListObject({
      ...listObject,
      title: evt.target.value,
    });
  };

  const handleListItemChange = (updatedListItems) => {
    setListObject({
      ...listObject,
      listItems: [...updatedListItems],
    });
  };

  const handleClearList = () => {
    setListObject(listDetails);
  };

  const onClose = () => {
    setShowDialog(false);
  };

  // This needs to run often to capture all changes that happen to a list
  // useEffect(() => {
  //   dispatch(updateList(listObject));
  // }, [listObject]);

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
          value={listObject.title}
          onChange={handleTitleChange}
          fullWidth
        />
      </DialogTitle>
      <DialogContent>
        <TaskList
          listItems={listObject.listItems}
          handleListItemChange={handleListItemChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClearList}>Clear</Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ListPage;
