import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import Close from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  checkedInput: {
    textDecoration: "line-through",
  },
}));

const Input = ({
  task = { checked: false, value: "" },
  newItem = null,
  disabled = null,
  ...props
}) => {
  const { checkedInput } = useStyles();
  return (
    <InputBase
      fullWidth
      className={task.checked ? checkedInput : ""}
      placeholder="Add an item..."
      data-testid="input"
      value={task.value}
      {...(!disabled &&
        !newItem && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                data-testid="remove-item"
                onClick={() => {}}
                edge="end"
              >
                <Close />
              </IconButton>
            </InputAdornment>
          ),
        })}
      disabled={disabled}
      {...props}
    />
  );
};

export default Input;
