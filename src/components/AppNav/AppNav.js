import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import EditableList from "../../routes/EditableList/EditableList";

const useStyles = makeStyles(() => ({
  toolbarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const AppNav = () => {
  const { toolbarContainer } = useStyles();
  const [showDialog, setShowDialog] = useState(false);
  const togglePopover = () => {
    setShowDialog(!showDialog);
  };

  return (
    <AppBar position="static">
      <Toolbar className={toolbarContainer}>
        <Button onClick={togglePopover} variant="contained">
          Create New List
        </Button>
        <EditableList
          newList
          showDialog={showDialog}
          setShowDialog={setShowDialog}
        />
      </Toolbar>
    </AppBar>
  );
};

export default AppNav;
