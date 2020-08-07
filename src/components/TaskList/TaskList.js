import React, { useState } from "react";
import List from "@material-ui/core/List";

import Task from "../Task/Task";

import { idGenerator, findOneAndUpdate } from "../../utils/helpers";

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

  const setTaskValues = (vals) => {
    const newListItems = findOneAndUpdate(listItems, "id", vals.id, vals);
    handleListItemChange([...newListItems]);
  };

  return (
    <List>
      {listItems.map((task) => (
        <Task
          disabled={disabled}
          checkbox
          key={task.id}
          task={task}
          setTaskValues={setTaskValues}
        />
      ))}
      {!disabled && (
        <EmptyInput
          newItem
          task={newTaskObject}
          setTaskValues={setTaskValues}
        />
      )}
    </List>
  );
};

export default TaskList;
