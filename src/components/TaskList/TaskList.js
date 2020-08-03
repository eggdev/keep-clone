import React from "react";
import List from "@material-ui/core/List";

import Task from "../Task/Task";

const EmptyInput = ({ ref, props }) => <Task ref={ref} {...props} />;

const TaskList = ({
  listItems = [],
  updateListItem = () => {},
  disabled = null,
}) => {
  const emptyRef = React.createRef();
  return (
    <List>
      {listItems.map((task) => (
        <Task checkbox key={task.id} task={task} />
      ))}
      <EmptyInput newItem />
    </List>
  );
};

export default TaskList;
