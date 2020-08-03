import React from "react";
import MuiCheckbox from "@material-ui/core/Checkbox";

const Checkbox = ({ checked, handleCheck }) => {
  return (
    <MuiCheckbox
      checked={checked}
      edge="start"
      tabIndex={-1}
      disableRipple
      size="small"
      onClick={handleCheck}
    />
  );
};

export default Checkbox;
