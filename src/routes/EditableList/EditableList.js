import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import CustomListItems from "../../components/CustomListItems/CustomListItems";

import { createActiveList } from "../../store/lists.actions";

const useStyles = makeStyles((theme) => ({
  dialogContainer: {
    width: "100%",
  },
}));

const EditableList = ({ showDialog, setShowDialog }) => {
  const { dialogContainer } = useStyles();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [listItems, setListItems] = useState([]);
  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  };

  const handleClearList = () => {
    setListItems([]);
    setTitle("");
  };

  const handleCreateList = () => {
    if (title !== "" && listItems.length > 0) {
      dispatch(
        createActiveList({
          title,
          listItems,
        })
      );
      setShowDialog(false);
    }
  };

  return (
    <Dialog
      open={showDialog}
      onClose={() => setShowDialog(false)}
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
        <Button onClick={handleCreateList}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditableList;
