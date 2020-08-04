import React, { useState } from "react";
import List from "@material-ui/core/List";

import Task from "../Task/Task";

import { idGenerator } from "../../utils/helpers";

const EmptyInput = ({ ref, ...props }) => <Task ref={ref} {...props} />;

const TaskList = ({
  listItems = [],
  handleListItemChange = () => {},
  disabled = null,
}) => {
  const [newTaskObject, setNewTaskObject] = useState({
    id: idGenerator(),
    value: "",
    checked: false,
  });

  const handleEmptyFocus = () => {
    handleListItemChange([...listItems, newTaskObject]);
  };

  return (
    <List>
      {listItems.map((task) => (
        <Task disabled={disabled} checkbox key={task.id} task={task} />
      ))}
      {!disabled && (
        <EmptyInput newItem task={newTaskObject} setTask={setNewTaskObject} />
      )}
    </List>
  );
};

export default TaskList;
