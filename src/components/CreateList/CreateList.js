import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  dialogContainer: {
    minWidth: "100%",
  },
}));

const CreateList = ({ showDialog, setShowDialog }) => {
  const { dialogContainer } = useStyles();
  const [title, setTitle] = useState("");
  const [currentListInput, setCurrentListInput] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  };
  const handleCurrentListItemChange = (evt) => {
    setCurrentListInput(evt.target.value);
  };

  const handleListItemSubmit = (evt) => {
    if (evt.key === "Enter" && currentListInput !== "") {
      setListItems([...listItems, currentListInput]);
      setCurrentListInput("");
    }
  };

  return (
    <Dialog
      className={dialogContainer}
      open={showDialog}
      onClose={() => setShowDialog(false)}
      maxWidth="md"
    >
      <DialogTitle>
        <TextField
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
      </DialogTitle>
      <DialogContent>
        {listItems.map((li) => (
          <Typography>{li}</Typography>
        ))}
        <TextField
          placeholder="Add an item..."
          value={currentListInput}
          onChange={handleCurrentListItemChange}
          onKeyPress={handleListItemSubmit}
        />
      </DialogContent>
      <DialogActions>
        <Button>Clear</Button>
        <Button>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateList;
