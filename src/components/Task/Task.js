import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Add from "@material-ui/icons/Add";

import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";

const Task = ({
  task = { value: "", checked: false },
  checkbox = null,
  newItem = null,
}) => {
  return (
    <ListItem>
      <ListItemIcon>
        {checkbox ? <Checkbox checked={task.checked} /> : <Add edge="start" />}
      </ListItemIcon>
      <Input value={task.value} disabled />
    </ListItem>
  );
};

export default Task;
