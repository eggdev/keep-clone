import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Add from "@material-ui/icons/Add";

import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";

const Task = ({
  task = { value: "", checked: false },
  setTaskValues = () => {},
  checkbox = null,
  newItem = null,
  disabled = null,
  ...props
}) => {
  return (
    <ListItem>
      <ListItemIcon>
        {checkbox ? <Checkbox checked={task.checked} /> : <Add edge="start" />}
      </ListItemIcon>
      <Input
        task={task}
        setTaskValues={setTaskValues}
        disabled={disabled}
        newItem
        {...props}
      />
    </ListItem>
  );
};

export default Task;
