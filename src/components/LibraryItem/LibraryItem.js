import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import MuiCardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";

import TaskList from "../TaskList/TaskList";

const CardContent = withStyles((theme) => ({
  root: {
    padding: `0 ${theme.spacing(2)}px`,
  },
}))(MuiCardContent);

const Item = ({ listDetails, openEditableList, updateListItem }) => {
  const handleListClick = () => openEditableList(listDetails);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card variant="elevation" onClick={handleListClick}>
        <CardHeader
          title={listDetails.title}
          action={
            <IconButton data-testid="delete-list" onClick={() => {}}>
              <Delete type="button" />
            </IconButton>
          }
        />
        <CardContent>
          <TaskList
            listItems={listDetails.listItems}
            updateListItem={updateListItem}
            disabled
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Item;
