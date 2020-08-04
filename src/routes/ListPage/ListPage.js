import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import TaskList from "../../components/TaskList/TaskList";

const useStyles = makeStyles(() => ({
  dialogContainer: {
    width: "100%",
  },
}));

const ListPage = ({
  showDialog,
  setShowDialog,
  newList = false,
  listDetails = { title: "", listItems: [] },
}) => {
  const { dialogContainer } = useStyles();

  const [listObject, setListObject] = useState(listDetails);

  const handleTitleChange = (evt) => {
    setListObject({
      ...listObject,
      title: evt.target.value,
    });
  };

  const handleClearList = () => {
    setListObject(listDetails);
  };

  const onClose = () => {
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
          value={listObject.title}
          onChange={handleTitleChange}
          fullWidth
        />
      </DialogTitle>
      <DialogContent>
        <TaskList listItems={listObject.listItems} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClearList}>Clear</Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ListPage;
