import React from "react";
import MuiCheckbox from "@material-ui/core/Checkbox";

const Checkbox = ({ task, setTaskValues }) => {
  const handleCheck = () => {
    setTaskValues({
      ...task,
      checked: !task.checked,
    });
  };
  return (
    <MuiCheckbox
      checked={task.checked}
      edge="start"
      tabIndex={-1}
      disableRipple
      size="small"
      onClick={handleCheck}
    />
  );
};

export default Checkbox;
